Subir container do Redis:
```docker
  docker run --name redis-cache -p 6379:6379 -d redis
```
ou
```cmd
  redis/run.sh
```

Rodar o projeto em desenv:
```cmd
  npm run start:dev
```

Rodar o projeto em prod:
```cmd
  npm run start
```