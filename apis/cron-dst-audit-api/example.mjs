const host = process.env.RAPIDAPI_HOST;
const response = await fetch(`https://${host}/v1/audit`, {method:'POST',headers:{'Content-Type':'application/json','X-RapidAPI-Host':host,'X-RapidAPI-Key':process.env.RAPIDAPI_KEY},body:JSON.stringify({expression:'30 1 * * *',timezone:'America/New_York',start_date:'2026-11-01',horizon_days:1})});
if (!response.ok) throw new Error(`HTTP ${response.status}`);
console.log(await response.json());
