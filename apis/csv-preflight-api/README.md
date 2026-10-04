# CSV Preflight API

Automated CSV imports often fail on the first mismatched row or a stray trailing delimiter, and the error rarely says which rows or columns to look at.

POST /v1/preflight returns bounded structural diagnostics for supplied CSV text: inconsistent column counts, duplicate or empty headers, malformed quoting and unexpected trailing delimiters, each with row, line and column. It never changes the data.

Send one JSON body with a csv string and an optional delimiter (comma, semicolon, tab or pipe). The response lists diagnostics with row, line and column and reports the exact total. Limits: 256 KiB of input, 5,000 records (header and blank lines included), 128 columns, 16 KiB per field, 100 diagnostics returned and a 64 KiB response. A limit error returns 422 and no partial result. Diagnostics follow RFC 4180 strictness, so some parsers accept some of what is reported. The API does not repair or rename anything, fetch URLs, evaluate formulas, read XLSX, call a model or log request bodies. It reports what its tokenizer detects; it does not claim to find every CSV problem or to predict whether a file will import elsewhere.

[Plans and subscribe](https://rapidapi.com/fhanzawa108/api/csv-preflight-api)

## Pricing

BASIC: $0 for 100 requests per month. PRO: $5 for 5,000 requests per month. Request overage is disabled. RapidAPI separately displays its standard bandwidth platform fee.

## How it differs

A hosted, versioned HTTP endpoint with a narrow documented contract. Free libraries such as csv-parse and Frictionless already cover much of this; the convenience is not installing or maintaining a parser in the workflow.

## curl example

```bash
curl "https://$RAPIDAPI_HOST/v1/preflight" \
  -H "X-RapidAPI-Key: $RAPIDAPI_KEY" -H "X-RapidAPI-Host: $RAPIDAPI_HOST" \
  -H 'Content-Type: application/json' \
  --data '{"csv":"id,name\n1,Ada\n2\n"}'
```

## python example

```python
import json, os, urllib.request
host = os.environ['RAPIDAPI_HOST']
with open('export.csv', encoding='utf-8') as source:
    body = json.dumps({'csv': source.read()}).encode()
request = urllib.request.Request('https://' + host + '/v1/preflight', data=body,
    headers={'Content-Type': 'application/json', 'X-RapidAPI-Host': host,
             'X-RapidAPI-Key': os.environ['RAPIDAPI_KEY']})
with urllib.request.urlopen(request, timeout=15) as response:
    report = json.load(response)
for item in report['diagnostics']:
    print(item['code'], 'row', item['row'], 'line', item['line'], 'column', item['column'])
```

## javascript example

```javascript
import { readFile } from 'node:fs/promises';
const host = process.env.RAPIDAPI_HOST;
const csv = await readFile('export.csv', 'utf8');
const response = await fetch(`https://${host}/v1/preflight`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'X-RapidAPI-Host': host, 'X-RapidAPI-Key': process.env.RAPIDAPI_KEY },
  body: JSON.stringify({ csv }),
});
if (!response.ok) throw new Error(`HTTP ${response.status}`);
const report = await response.json();
for (const d of report.diagnostics) console.log(d.code, 'row', d.row, 'line', d.line, 'column', d.column);
```
