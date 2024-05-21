# Projeto nodejs com Redis (mentoria)

1. Subir container do Redis:
```docker
  docker run --name redis-cache -p 6379:6379 -d redis
```
ou
```cmd
  redis/run.sh
```

2. Rodar o projeto em desenv:
```cmd
  npm run start:dev
```

3. Rodar o projeto em prod:
```cmd
  npm run start
```