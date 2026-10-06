# JSON Duplicate-Key Preflight API

Detect duplicate JSON keys before downstream dictionary conversion silently overwrites values

Non-mutating syntax and duplicate-key diagnostics for supplied JSON text

# JSON Duplicate-Key Preflight API

Check supplied JSON text before a parser silently overwrites repeated keys.
POST `/v1/preflight` with an outer JSON object: `{"json":"{\"a\":1,\"a\":2}"}`.
The `json` field must contain the original text, not an already parsed object.

Returns syntax validity, exact duplicate count, bounded diagnostics, input bytes,
node count and a truncation flag. Duplicates are interoperability warnings, not
automatically syntax errors. Names are compared after JSON escape decoding and
are case-sensitive. An object repeated in an array is examined independently.
For invalid JSON the duplicate count is null; no partial scan is claimed.

Limits: input 64 KiB UTF-8, 32 container levels, 10,000 values/containers,
100 returned diagnostics, response 32 KiB. Limit failures return HTTP 422.
Diagnostic keys are clipped to128 characters; object pointers to512 characters,
with explicit truncation flags. Diagnostic order is deterministic; nested
containers follow reverse traversal order. Values never appear in diagnostics.
Malformed supplied JSON returns HTTP200 with `syntax_valid:false`; a malformed
request envelope returns400. Numeric tokens are syntax-checked without coercion.
Non-finite numbers are rejected. No repair, URL fetch, schema evaluation or LLM.
No request bodies, headers, diagnostic values or secrets are logged or persisted.
Key names and paths appear in the response; send only data you may transmit.

BASIC:100 calls/month free. PRO:$5 for5,000 calls/month. Hard quotas, request
overage off. Marketplace platform fees, if displayed, are separate.
Local parser hooks are free alternatives; paid demand remains a market hypothesis.

Examples require environment variables `RAPIDAPI_HOST` and `RAPIDAPI_KEY`.
No credential is embedded in the examples.

```sh
curl "https://$RAPIDAPI_HOST/v1/preflight" \
  -H "X-RapidAPI-Key: $RAPIDAPI_KEY" -H "X-RapidAPI-Host: $RAPIDAPI_HOST" \
  -H 'Content-Type: application/json' \
  --data '{"json":"{\"id\":1,\"id\":2}"}'
```

```python
import json, os, urllib.request
host = os.environ['RAPIDAPI_HOST']
request = urllib.request.Request('https://' + host + '/v1/preflight',
    data=json.dumps({'json': '{"id":1,"id":2}'}).encode(),
    headers={'Content-Type':'application/json','X-RapidAPI-Host':host,
             'X-RapidAPI-Key':os.environ['RAPIDAPI_KEY']})
with urllib.request.urlopen(request, timeout=15) as response:
    print(json.load(response))
```

```javascript
const host = process.env.RAPIDAPI_HOST;
const response = await fetch(`https://${host}/v1/preflight`, {
  method:'POST',
  headers:{'Content-Type':'application/json','X-RapidAPI-Host':host,
           'X-RapidAPI-Key':process.env.RAPIDAPI_KEY},
  body:JSON.stringify({json:'{"id":1,"id":2}'}),
});
if (!response.ok) throw new Error(`HTTP ${response.status}`);
console.log(await response.json());
```


[Plans and subscribe](https://rapidapi.com/fhanzawa108/api/json-duplicate-key-preflight-api)

[Product page and use cases](https://awd-change-monitor.hanzawa108.chatgpt.site/apis/json-duplicate-key-preflight-api?src=gh)

## Pricing

BASIC: $0 for 100 calls per month. PRO: $5 for 5,000 calls per month. Hard limits; request overage disabled.

## How it differs

Maintained versioned HTTP diagnostics without installing a parser; free local hooks are strong alternatives.

## curl example

```bash
curl "https://$RAPIDAPI_HOST/v1/preflight" -H "X-RapidAPI-Key: $RAPIDAPI_KEY" -H "X-RapidAPI-Host: $RAPIDAPI_HOST" -H 'Content-Type: application/json' --data '{"json":"{\"id\":1,\"id\":2}"}' 
```

## python example

```python
import json, os, urllib.request
host = os.environ['RAPIDAPI_HOST']
request = urllib.request.Request('https://' + host + '/v1/preflight', data=json.dumps({'json':'{"id":1,"id":2}'}).encode(), headers={'Content-Type':'application/json','X-RapidAPI-Host':host,'X-RapidAPI-Key':os.environ['RAPIDAPI_KEY']})
with urllib.request.urlopen(request, timeout=15) as response: print(json.load(response))
```

## javascript example

```javascript
const host = process.env.RAPIDAPI_HOST;
const response = await fetch(`https://${host}/v1/preflight`, {method:'POST',headers:{'Content-Type':'application/json','X-RapidAPI-Host':host,'X-RapidAPI-Key':process.env.RAPIDAPI_KEY},body:JSON.stringify({json:'{"id":1,"id":2}'})});
if (!response.ok) throw new Error(`HTTP ${response.status}`);
console.log(await response.json());
```
