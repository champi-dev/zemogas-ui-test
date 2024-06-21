import Fastify from 'fastify'
import dotenv from 'dotenv'
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { initialCheck } from './methods/index.js'

dotenv.config()
const fastify = Fastify({ logger: true })

const firebaseConfig = {
  // eslint-disable-next-line no-undef
  apiKey: `${process.env.API_KEY}`,
  // eslint-disable-next-line no-undef
  databaseURL: `${process.env.DATABASE_URL}`,
}
const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)

/* fastify.get('/api/celebrity/:name', async (request, reply) => {
  const { name } = request.params

  try {
    const { bio, category } = await scrapeGoogle(name)
    reply.send({ name, bio, category })
  } catch (error) {
    console.error('Error fetching data:', error)
    reply.code(500).send({ error: 'Error fetching data' })
  }
}) */

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
    initialCheck()
    fastify.log.info(`Server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    // eslint-disable-next-line no-undef
    process.exit(1)
  }
}

start()
