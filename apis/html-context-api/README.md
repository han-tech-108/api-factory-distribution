# HTML Context API

HTTP-only automation needs to convert already obtained HTML into compact, deterministic Markdown without installing a converter, executing a browser or calling an LLM.

POST /v1/convert converts supplied HTML to deterministic Markdown and returns diagnostics. It does not fetch URLs, render pages, call a model, log bodies or store content.

Send one JSON body with an html field. The response contains markdown, version and diagnostics. Limits: HTML 256 KiB, 10,000 parsed nodes, depth 63; limit errors return 422 and there is no silent truncation. Complex tables flatten with a TABLES_FLATTENED warning. Treat the returned Markdown as untrusted text. This is a bounded subset converter, not a browser DOM or an HTML sanitizer.

[Plans and subscribe](https://rapidapi.com/fhanzawa108/api/html-context-api)

## Pricing

BASIC: $0 for 100 requests per month. PRO: $5 for 5,000 requests per month. Request overage is disabled. RapidAPI separately displays its standard bandwidth platform fee.

## How it differs

Supplied-HTML-only HTTP endpoint with versioned deterministic conversion and diagnostics. Free converter libraries are strong alternatives; this is a convenience service with a narrow, documented contract.

## curl example

```bash
curl "https://$RAPIDAPI_HOST/v1/convert" \
  -H "X-RapidAPI-Key: $RAPIDAPI_KEY" -H "X-RapidAPI-Host: $RAPIDAPI_HOST" \
  -H 'Content-Type: application/json' --data '{"html":"<h1>Hello</h1>"}'
```

## python example

```python
import json, os, urllib.request
host = os.environ['RAPIDAPI_HOST']
request = urllib.request.Request('https://' + host + '/v1/convert',
    data=json.dumps({'html':'<h1>Hello</h1>'}).encode(),
    headers={'Content-Type':'application/json', 'X-RapidAPI-Host':host,
             'X-RapidAPI-Key':os.environ['RAPIDAPI_KEY']})
with urllib.request.urlopen(request, timeout=15) as response:
    print(json.load(response)['markdown'])
```

## javascript example

```javascript
const host = process.env.RAPIDAPI_HOST;
const response = await fetch(`https://${host}/v1/convert`, {
  method: 'POST', headers: {'Content-Type':'application/json',
    'X-RapidAPI-Host':host, 'X-RapidAPI-Key':process.env.RAPIDAPI_KEY},
  body: JSON.stringify({html:'<h1>Hello</h1>'})
});
if (!response.ok) throw new Error(`HTTP ${response.status}`);
console.log((await response.json()).markdown);
```
