import json, os, urllib.request
host = os.environ['RAPIDAPI_HOST']
request = urllib.request.Request('https://' + host + '/v1/convert',
    data=json.dumps({'html':'<h1>Hello</h1>'}).encode(),
    headers={'Content-Type':'application/json', 'X-RapidAPI-Host':host,
             'X-RapidAPI-Key':os.environ['RAPIDAPI_KEY']})
with urllib.request.urlopen(request, timeout=15) as response:
    print(json.load(response)['markdown'])
