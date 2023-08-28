import fastify from 'fastify'
import { env } from './env'
import Cookie from '@fastify/cookie'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(Cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
