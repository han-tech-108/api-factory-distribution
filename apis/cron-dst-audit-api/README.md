# Cron DST Audit API

Local-time Cron schedules can match nonexistent or repeated wall-clock times at DST transitions.

Supplied numeric Cron and IANA zone diagnostics; no scheduling or execution.

# Cron DST Audit API

POST /v1/audit accepts a supplied numeric five-field Cron expression, IANA timezone, local start_date (YYYY-MM-DD), optional horizon_days (1–366, default30), max_results (1–100, default100).

Example:
```json
{"expression":"30 1 * * *","timezone":"America/New_York","start_date":"2026-11-01","horizon_days":1}
```
The repeated01:30 returns both UTC instants05:30Z and06:30Z with offsets and fold values. A nonexistent local time is a gap with no UTC instant. Each occurrence is a nominal local Cron match; a gap is not an execution. Diagnostics do not change or execute jobs.

Numeric fields support *, lists, ascending ranges and positive steps. Minute0–59, hour0–23, DOM1–31, month1–12, DOW0–7 (Sunday0/7). When both day fields are restricted, matching uses OR; if either day field starts with *, both field masks must match (including any step restriction). No names, macros, Quartz, seconds, L/W/#/? or scheduler-engine emulation. All results are diagnostic: real schedulers may skip, shift or repeat.

Input JSON max8192bytes, expression512ASCII chars, individual field128chars, timezone96chars. Local start year1900–2099. Output max64KiB,100 nominal matches,600000 work units. Stop after the bounded result limit and mark truncated=true when an additional match exists. Do not infer absence of later DST transitions from a truncated report; narrow the start date/horizon.

400 malformed/duplicate JSON envelope;403 unauthorized;413 body limit;415 nonJSON;422 unsupported/invalid/limit;503 paused. Authentication uses the RapidAPI proxy secret, fails closed, and never logs bodies/headers. No fetch, callback, scheduler execution, LLM, customer data storage, or paid runtime dependency. Pinned tzdata is bundled; tzdb_version is returned. Future political changes require an audited data update.

BASIC100calls/month free. PRO$5/month5000calls. Hard request quotas, overageOFF. No promise of universal scheduler behavior. Free croniter/zoneinfo and scheduler-specific docs are strong alternatives; hosted demand is unproven.

Original application code. Python standard-library/PSF notices and tzdata Apache/IANA license files retained in artifact. Supplied input only; no third-party data collection.


[Plans and subscribe](https://rapidapi.com/fhanzawa108/api/cron-dst-audit-api)

## Pricing

BASIC: $0 for 100 calls per month. PRO: $5 for 5,000 calls per month. Hard limits; request overage disabled.

## How it differs

Pinned tzdb and explicit gap/fold UTC diagnostics over HTTP; free local libraries remain strong alternatives and hosted demand is unproven.

## curl example

```bash
curl "https://$RAPIDAPI_HOST/v1/audit" -H "X-RapidAPI-Key: $RAPIDAPI_KEY" -H "X-RapidAPI-Host: $RAPIDAPI_HOST" -H 'Content-Type: application/json' --data '{"expression":"30 1 * * *","timezone":"America/New_York","start_date":"2026-11-01","horizon_days":1}'
```

## python example

```python
import json, os, urllib.request
host = os.environ['RAPIDAPI_HOST']
request = urllib.request.Request('https://' + host + '/v1/audit', data=json.dumps({'expression':'30 1 * * *','timezone':'America/New_York','start_date':'2026-11-01','horizon_days':1}).encode(), headers={'Content-Type':'application/json','X-RapidAPI-Host':host,'X-RapidAPI-Key':os.environ['RAPIDAPI_KEY']})
with urllib.request.urlopen(request, timeout=15) as response: print(json.load(response))
```

## javascript example

```javascript
const host = process.env.RAPIDAPI_HOST;
const response = await fetch(`https://${host}/v1/audit`, {method:'POST',headers:{'Content-Type':'application/json','X-RapidAPI-Host':host,'X-RapidAPI-Key':process.env.RAPIDAPI_KEY},body:JSON.stringify({expression:'30 1 * * *',timezone:'America/New_York',start_date:'2026-11-01',horizon_days:1})});
if (!response.ok) throw new Error(`HTTP ${response.status}`);
console.log(await response.json());
```
