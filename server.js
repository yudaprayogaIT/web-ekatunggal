import { createServer } from 'http'
import next from 'next'

const app = next({ dev: false })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res)
  })
  .listen(parseInt(process.env.PORT, 10) || 3000, err => {
    if (err) throw err
    console.log('> Server ready on port', process.env.PORT)
  })
})
