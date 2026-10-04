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
