const morgan = require('morgan')
const path = require('path')
const rfs = require('rotating-file-stream')

const accessLogFiles = rfs.createStream('access.log', {
  path: path.join(process.cwd(), 'logs'), // logs folder
  teeToStdout: true, // output to process.stdout
  compress: 'gzip', // compress rotated files
  size: '50M' // rotate every 50mb
})

const errorLogFiles = rfs.createStream('error.log', {
  path: path.join(process.cwd(), 'logs'), // logs folder
  compress: 'gzip', // compress rotated files
  size: '50M' // rotate every 50mb
})

// log only 4xx and 5xx responses
function skip (req, res) {
  return res.statusCode < 400
}

module.exports = function middleware (app) {
  app.use(morgan('combined', { immediate: false, stream: errorLogFiles, skip }))
  console.log('Middleware initialized (logs file for error requests)')
  app.use(morgan('combined', { immediate: true, stream: accessLogFiles }))
  console.log('Middleware initialized (logs file for access requests)')
  return app
}
