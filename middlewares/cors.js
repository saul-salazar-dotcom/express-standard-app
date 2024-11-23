const cors = require('cors')
const options = {
  // some legacy browsers (IE11, various SmartTVs) choke on 204
  optionsSuccessStatus: 200,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
}
module.exports = function middleware (app) {
  app.use(cors(options))
  console.log('Middleware initialized (cors/cross origin resource sharing)')
  return app
}
