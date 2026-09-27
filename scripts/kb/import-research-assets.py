#!/usr/bin/env python3
"""Restore the September 2026 PDF holdings and their existing text layers.

Uses the checked-in acquisition manifest. Run with --download to fetch missing
PDFs from their public publisher/author URLs. Existing PDFs must match the
recorded checksum. No OCR or model service is called.
"""
import argparse
import hashlib
import json
from pathlib import Path
import subprocess
from urllib.request import urlopen


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--download', action='store_true')
    args = parser.parse_args()
    root = Path(__file__).resolve().parents[2]
    manifest = json.loads((root / 'kb/registries/research-2026.json').read_text())
    assets = {
        asset['id']: asset
        for path in (root / 'kb/assets').glob('*.json')
        for asset in [json.loads(path.read_text())]
    }
    restored = 0
    for record in manifest['records']:
        for entry in record['files']:
            pdf = root / entry['checkout_path']
            if pdf.exists():
                data = pdf.read_bytes()
            elif args.download:
                with urlopen(entry['url'], timeout=60) as response:
                    data = response.read()
            else:
                raise SystemExit(f"Missing {entry['checkout_path']}; use --download to retrieve it")
            if not data.startswith(b'%PDF') or hashlib.sha256(data).hexdigest() != entry['sha256']:
                raise SystemExit(f"PDF checksum mismatch: {entry['checkout_path']}")
            pdf.parent.mkdir(parents=True, exist_ok=True)
            if not pdf.exists():
                pdf.write_bytes(data)
            if 'asset' in entry:
                asset = assets[entry['asset']]
                result = subprocess.run(
                    ['pdftotext', '-layout', str(pdf), '-'],
                    check=True, capture_output=True, text=True
                )
                pages = result.stdout.split('\f')
                if not pages[-1].strip():
                    pages.pop()
                if len(pages) != entry['leaves'] or len(pages) != asset['leaves']:
                    raise SystemExit(f"PDF leaf count changed: {record['key']}")
                directory = root / 'kb' / asset['dir']
                directory.mkdir(parents=True, exist_ok=True)
                for number, text in enumerate(pages, 1):
                    (directory / f'page-{number:04}.txt').write_text(text, encoding='utf-8')
            restored += 1
            print(f"{record['key']}: {entry['kind']}, {entry['leaves']} PDF leaves")
    print(f'{restored} PDF holdings verified; available text layers restored.')


if __name__ == '__main__':
    main()
