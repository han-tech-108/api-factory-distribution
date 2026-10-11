const host = process.env.RAPIDAPI_HOST;
const response = await fetch(`https://${host}/v1/preflight`, {method:'POST',headers:{'Content-Type':'application/json','X-RapidAPI-Host':host,'X-RapidAPI-Key':process.env.RAPIDAPI_KEY},body:JSON.stringify({"ics":"BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Example//EN\r\nBEGIN:VEVENT\r\nUID:example\r\nDTSTAMP:20261011T000000Z\r\nDTSTART;VALUE=DATE:20261011\r\nDTEND;VALUE=DATE:20261012\r\nEND:VEVENT\r\nEND:VCALENDAR\r\n"})});
if (!response.ok) throw new Error(`HTTP ${response.status}`);
console.log(await response.json());
