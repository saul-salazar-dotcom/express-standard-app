# express-standard-app

[ExpressJS application](https://expressjs.com) with the following features as middlewares:
- [helmet](https://www.npmjs.com/package/helmet) to add security by setting HTTP response headers
- [morgan](https://www.npmjs.com/package/morgan) to add logs for access and error requests (with file rotation each 50MB)
- [cors](https://www.npmjs.com/package/cors) to enable Cross Origin Resource Sharing (`api.siteA.com` to `app.siteA.com`)
- [compression](https://www.npmjs.com/package/compression) in gzip to make responses lightweight (less bandwidth = costs savings)

## Quick Start

First download the module:
```bash
npm install --save express-standard-app
```

Then start building:
```js
const app = require('express-standard-app')

// routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// startup
try {
  const port = process.env.PORT || 3000
  app.listen(port)
  console.log(`Startup completed, listening on port ${port}`)
} catch (error) {
  console.error('Unexpected error', error)
}
```

## Docker

Image: `saulsalazar/express-standard-app`

```sh
docker run -v .:/app/ -v /app/node_modules -p 3000:3000 saulsalazar/express-standard-app
```

### Dockerfile

```Dockerfile
FROM saulsalazar/express-standard-app
```

### Docker Compose

Example `docker-compose.yaml` file

```yaml
services:
  server:
    image: saulsalazar/express-standard-app
    volumes:
      - .:/app/
      - /app/node_modules
    ports:
      - "3000:3000"
```

## Development

Contributions Welcome!

```sh
# download code
git clone https://github.com/saul-salazar-dotcom/express-standard-app.git
cd express-standard-app

# start in docker
docker compose up -d

# start in local
npm install
npm run start
```
