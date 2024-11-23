const app = require('./index')

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
