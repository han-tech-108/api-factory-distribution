curl "https://$RAPIDAPI_HOST/v1/convert" \
  -H "X-RapidAPI-Key: $RAPIDAPI_KEY" -H "X-RapidAPI-Host: $RAPIDAPI_HOST" \
  -H 'Content-Type: application/json' --data '{"html":"<h1>Hello</h1>"}'
