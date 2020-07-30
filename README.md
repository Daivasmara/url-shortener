## Architecture
![Microservice_Architecture](https://i.imgur.com/uX1Qg1C.png)

## Related Services
* [url-shortener-root](https://github.com/Daivasmara/url-shortener-root)
  * Postgres
  * Kong
  * Konga
  * RabbitMQ
* [url-shortener-web](https://github.com/Daivasmara/url-shortener-web)
  * React.js
* [url-shortener-api](https://github.com/Daivasmara/url-shortener-api)
  * Postgres
  * Express Typescript
  * Adminer
* url-shortener-analytics **[WIP]**

## Project Structure
```
url-shortener
├── url-shortener-api
├── url-shortener-root
└── url-shortener-analytics [WIP]
```

## Endpoints
### Public
* https://potong.link - UI
* https://api.potong.link - REST API

### Private
* https://konga.potong.link - Konga UI
* https://db.potong.link - Adminer UI
* https://rabbitmq.potong.link - RabbitMQ Management UI

## Development
```sh
$ docker run --rm --name url-shortener-postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_DB=url-shortener \
  -p 5432:5432 \
  -d \
  postgres:12.3
  
# api
$ npm run dev

# web
npm start
```

## Production
```sh
docker network create url-shortener
docker-compose up # root, api
```
