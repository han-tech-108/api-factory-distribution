# iCalendar Import Preflight API

Malformed calendar exports and inconsistent event dates can interrupt calendar import workflows.

Bounded supplied ICS structure and event-time diagnostics only; no import or repair.

# iCalendar Import Preflight API

POST /v1/preflight accepts only an ics UTF-8 string. Limit 256 KiB / 5000 physical lines / 100 VEVENTs / nesting8 / 100 diagnostics / 64 KiB response.

Checks component balance, line unfolding, duplicate singleton fields, lexical dates/durations, DTSTART/DTEND/DURATION conflicts, DATE/date-time consistency and UTC/TZID contradictions. Results include explicit coverage. Unsupported recurrence/timezone/vendor semantics remain UNKNOWN. PASS_SUPPORTED_CHECKS is not complete RFC 5545 validation or an import guarantee.

No URL fetch, credentials, calendar import/sync/repair, recurrence execution, LLM, body storage or logging. HTTP200 diagnostics;400 malformed JSON;403 unauthorized;415 JSON required;422 unsupported input/limits;503 paused.

BASIC: $0 for 100 calls per month. PRO: $5 for 5,000 calls per month. Hard limits; request overage disabled. RapidAPI may display a separate bandwidth platform fee. Free icalendar.org and local libraries remain alternatives. Hosted paid demand is unproven.

```python
import json, os, urllib.request
host = os.environ['RAPIDAPI_HOST']
request = urllib.request.Request('https://' + host + '/v1/preflight', data=json.dumps({'ics': 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Example//EN\r\nBEGIN:VEVENT\r\nUID:example\r\nDTSTAMP:20261011T000000Z\r\nDTSTART;VALUE=DATE:20261011\r\nDTEND;VALUE=DATE:20261012\r\nEND:VEVENT\r\nEND:VCALENDAR\r\n'}).encode(), headers={'Content-Type':'application/json','X-RapidAPI-Host':host,'X-RapidAPI-Key':os.environ['RAPIDAPI_KEY']})
with urllib.request.urlopen(request, timeout=15) as response: print(json.load(response))
```


[Plans and subscribe](https://rapidapi.com/fhanzawa108/api/icalendar-import-preflight-api)

[Product page and use cases](https://awd-change-monitor.hanzawa108.chatgpt.site/apis/icalendar-import-preflight-api?src=gh)

## Pricing

BASIC: $0 for 100 calls per month. PRO: $5 for 5,000 calls per month. Hard limits; request overage disabled.

## How it differs

Explicit supported-check coverage and UNKNOWN diagnostics over HTTP; free libraries and validators are strong alternatives, and hosted demand is unproven.

## curl example

```bash
curl "https://$RAPIDAPI_HOST/v1/preflight" -H "X-RapidAPI-Key: $RAPIDAPI_KEY" -H "X-RapidAPI-Host: $RAPIDAPI_HOST" -H "Content-Type: application/json" --data '{"ics":"BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Example//EN\r\nBEGIN:VEVENT\r\nUID:example\r\nDTSTAMP:20261011T000000Z\r\nDTSTART;VALUE=DATE:20261011\r\nDTEND;VALUE=DATE:20261012\r\nEND:VEVENT\r\nEND:VCALENDAR\r\n"}'
```

## python example

```python
import json, os, urllib.request
host = os.environ['RAPIDAPI_HOST']
request = urllib.request.Request('https://' + host + '/v1/preflight', data=json.dumps({'ics': 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Example//EN\r\nBEGIN:VEVENT\r\nUID:example\r\nDTSTAMP:20261011T000000Z\r\nDTSTART;VALUE=DATE:20261011\r\nDTEND;VALUE=DATE:20261012\r\nEND:VEVENT\r\nEND:VCALENDAR\r\n'}).encode(), headers={'Content-Type':'application/json','X-RapidAPI-Host':host,'X-RapidAPI-Key':os.environ['RAPIDAPI_KEY']})
with urllib.request.urlopen(request, timeout=15) as response: print(json.load(response))
```

## javascript example

```javascript
const host = process.env.RAPIDAPI_HOST;
const response = await fetch(`https://${host}/v1/preflight`, {method:'POST',headers:{'Content-Type':'application/json','X-RapidAPI-Host':host,'X-RapidAPI-Key':process.env.RAPIDAPI_KEY},body:JSON.stringify({"ics":"BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Example//EN\r\nBEGIN:VEVENT\r\nUID:example\r\nDTSTAMP:20261011T000000Z\r\nDTSTART;VALUE=DATE:20261011\r\nDTEND;VALUE=DATE:20261012\r\nEND:VEVENT\r\nEND:VCALENDAR\r\n"})});
if (!response.ok) throw new Error(`HTTP ${response.status}`);
console.log(await response.json());
```
