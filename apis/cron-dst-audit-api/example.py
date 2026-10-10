import json, os, urllib.request
host = os.environ['RAPIDAPI_HOST']
request = urllib.request.Request('https://' + host + '/v1/audit', data=json.dumps({'expression':'30 1 * * *','timezone':'America/New_York','start_date':'2026-11-01','horizon_days':1}).encode(), headers={'Content-Type':'application/json','X-RapidAPI-Host':host,'X-RapidAPI-Key':os.environ['RAPIDAPI_KEY']})
with urllib.request.urlopen(request, timeout=15) as response: print(json.load(response))
