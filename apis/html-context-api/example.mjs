const host = process.env.RAPIDAPI_HOST;
const response = await fetch(`https://${host}/v1/convert`, {
  method: 'POST', headers: {'Content-Type':'application/json',
    'X-RapidAPI-Host':host, 'X-RapidAPI-Key':process.env.RAPIDAPI_KEY},
  body: JSON.stringify({html:'<h1>Hello</h1>'})
});
if (!response.ok) throw new Error(`HTTP ${response.status}`);
console.log((await response.json()).markdown);
