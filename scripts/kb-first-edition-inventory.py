"""Inventory of the first-edition chapters as structural counts.

Parses src/lib/grammar/chapters/*.svelte without any model call and prints the
counts used in docs/knowledge-base/PLAN.md §2: sections, paragraphs, tables,
sentences, sentences with citations, citations with and without a page,
examples with and without a locus, grade tags, and citations per source key.

    uv run python scripts/kb-first-edition-inventory.py
    uv run python scripts/kb-first-edition-inventory.py --dump sentences.json

Sentence splitting is heuristic (a period, question or exclamation mark
followed by a capital or a tag); the counts are a structural inventory, never
an assertion count.
"""
import re, json, glob, os, sys, collections

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src', 'lib', 'grammar', 'chapters')
ex_re = re.compile(r'<Ex\b(.*?)/>|<Ex\b(.*?)>.*?</Ex>', re.S)
attr_re = re.compile(r'(\w+)=(?:"([^"]*)"|\{([^}]*)\})|\b(constructed|paren)\b')


def attrs(s):
    d = {}
    for m in attr_re.finditer(s):
        if m.group(1):
            d[m.group(1)] = m.group(2) if m.group(2) is not None else m.group(3)
        elif m.group(4):
            d[m.group(4)] = True
    return d


def main(dump=None):
    stats = collections.Counter()
    refkeys = collections.Counter()
    pageless = collections.Counter()
    grades = collections.Counter()
    records = []
    for f in sorted(glob.glob(os.path.join(ROOT, '*.svelte'))):
        slug = os.path.basename(f)[:-7]
        src = re.sub(r'<script.*?</script>', '', open(f, encoding='utf-8').read(), flags=re.S)
        for m in ex_re.finditer(src):
            a = attrs(m.group(1) or m.group(2) or '')
            stats['examples'] += 1
            if a.get('constructed'):
                stats['examples_constructed'] += 1
            cite = a.get('cite')
            if cite:
                stats['examples_cited_with_locus' if ':' in cite else 'examples_cited_without_locus'] += 1
        body = ex_re.sub(' ', src)
        for t, sid, inner in re.findall(r'<S\s+t="([^"]*)"(?:\s+id="([^"]*)")?[^>]*>(.*?)</S>', body, flags=re.S):
            stats['sections'] += 1
            stats['tables'] += len(re.findall(r'<table', inner))
            for p in re.findall(r'<p>(.*?)</p>', inner, flags=re.S):
                stats['paragraphs'] += 1
                text = re.sub(r'\s+', ' ', p).strip()
                for s in re.split(r'(?<=[.!?›])\s+(?=[A-Z<‹(])', text):
                    if len(re.sub(r'<[^>]+>', '', s).strip()) < 3:
                        continue
                    stats['sentences'] += 1
                    refs = [attrs(r) for r in re.findall(r'<Ref\s+([^>]*?)/?>', s)]
                    for a in refs:
                        refkeys[a.get('k', '?')] += 1
                        stats['citations'] += 1
                        if 'p' in a:
                            stats['citations_with_page'] += 1
                        else:
                            pageless[a.get('k', '?')] += 1
                    g = re.findall(r'‹([a-z-]+)›', s)
                    for gg in g:
                        grades[gg] += 1
                    if refs:
                        stats['sentences_with_citation'] += 1
                    if not refs and not g and '<Xr' not in s:
                        stats['sentences_bare'] += 1
                    if dump:
                        records.append({'chapter': slug, 'section': sid or t, 'text': re.sub(r'<[^>]+>', '', s), 'citations': [a.get('k') for a in refs], 'grades': g})
    print(json.dumps({'stats': stats, 'citations_by_key': refkeys.most_common(30), 'pageless_by_key': pageless.most_common(20), 'grades': grades.most_common()}, ensure_ascii=False, indent=1))
    if dump:
        json.dump(records, open(dump, 'w', encoding='utf-8'), ensure_ascii=False)


if __name__ == '__main__':
    main(sys.argv[2] if len(sys.argv) > 2 and sys.argv[1] == '--dump' else None)
