const host = process.env.RAPIDAPI_HOST;
const response = await fetch(`https://${host}/v1/preflight`, {method:'POST',headers:{'Content-Type':'application/json','X-RapidAPI-Host':host,'X-RapidAPI-Key':process.env.RAPIDAPI_KEY},body:JSON.stringify({json:'{"id":1,"id":2}'})});
if (!response.ok) throw new Error(`HTTP ${response.status}`);
console.log(await response.json());
