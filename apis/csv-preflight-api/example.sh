curl "https://$RAPIDAPI_HOST/v1/preflight" \
  -H "X-RapidAPI-Key: $RAPIDAPI_KEY" -H "X-RapidAPI-Host: $RAPIDAPI_HOST" \
  -H 'Content-Type: application/json' \
  --data '{"csv":"id,name\n1,Ada\n2\n"}'
