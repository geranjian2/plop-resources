
echo "initial service"
#!/bin/sh
trap 'kill $(jobs -p)' EXIT
npm run migration:run
npm run start:dev monorepo-nest &
npm run start:dev user &

wait

echo "end service"