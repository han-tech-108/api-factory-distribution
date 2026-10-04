import { readFile } from 'node:fs/promises';
const host = process.env.RAPIDAPI_HOST;
const csv = await readFile('export.csv', 'utf8');
const response = await fetch(`https://${host}/v1/preflight`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'X-RapidAPI-Host': host, 'X-RapidAPI-Key': process.env.RAPIDAPI_KEY },
  body: JSON.stringify({ csv }),
});
if (!response.ok) throw new Error(`HTTP ${response.status}`);
const report = await response.json();
for (const d of report.diagnostics) console.log(d.code, 'row', d.row, 'line', d.line, 'column', d.column);
