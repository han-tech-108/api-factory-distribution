import json, os, urllib.request
host = os.environ['RAPIDAPI_HOST']
request = urllib.request.Request('https://' + host + '/v1/preflight', data=json.dumps({'ics': 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Example//EN\r\nBEGIN:VEVENT\r\nUID:example\r\nDTSTAMP:20261011T000000Z\r\nDTSTART;VALUE=DATE:20261011\r\nDTEND;VALUE=DATE:20261012\r\nEND:VEVENT\r\nEND:VCALENDAR\r\n'}).encode(), headers={'Content-Type':'application/json','X-RapidAPI-Host':host,'X-RapidAPI-Key':os.environ['RAPIDAPI_KEY']})
with urllib.request.urlopen(request, timeout=15) as response: print(json.load(response))
