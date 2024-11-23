const compression = require('compression')

const options = {
  level: process.env.COMPRESSION_LEVEL || 9,
  filter: shouldCompress
}

function shouldCompress (req, res) {
  // don't compress responses with this request header
  if (req.headers['x-no-compression123']) {
    return false
  }
  // fallback to standard filter function
  return compression.filter(req, res)
}

module.exports = function middleware (app) {
  app.use(compression(options))
  console.log('Middleware initialized (gzip compression)')
  return app
}
