# September 2026 sources

The bibliography and citation registry register all 20 works in
`kb/registries/research-2026.json`. Its publication and access descriptions were
checked on 27 September 2026. The manifest records download URLs, SHA-256 hashes,
PDF leaf counts and document roles for 15 local PDF holdings across 14 works.

Eight holdings are complete published papers. The remainder are an author-posted
manuscript, a conference abstract book, three copies of the same accepted-paper
list linked to their respective contributions, and a doctoral thesis's summary
and abstract. The accepted-paper lists provide bibliographic evidence only and
have no linguistic text assets. The conference abstract asset is limited to its
two relevant leaves. The thesis's full text remains embargoed until March 2031.

The 12 text assets use the PDFs' existing text layers. PDF leaf numbers remain
stable; printed page labels are supplied only where checked. No new grammatical
claims are inferred from a title, programme entry or unavailable full text.

To verify local holdings and regenerate their page text:

```sh
python3 scripts/kb/import-research-assets.py
```

Add `--download` to retrieve missing PDFs from their public publisher or author
URLs. A checksum mismatch stops the import for inspection. The PDFs and extracted
text stay under the ignored `kb/imports/ocr/` directory; the acquisition manifest
and asset metadata are versioned.

The source catalogue import does not change rights flags. The archive currently
rejects uploads for these records because their source-level `humanDownload`
permission is false. There are no archive revision IDs for this intake; the
manifest's `archive_role` records the intended role of each document.
