const helmet = require('helmet')
const options = {}

module.exports = function middleware (app) {
  app.use(helmet(options))
  console.log('Middleware initialized (secure HTTP headers)')
  return app
}
