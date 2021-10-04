const express = require('express')

const console = require('consola')
const {Nuxt, Builder} = require('nuxt')
// eslint-disable-next-line no-unused-vars
const logger = require('morgan')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'


async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)
  // lấy thông tin về host và post đươc khai báo bên trong nuxt.config.js
  const {host, port} = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  console.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
