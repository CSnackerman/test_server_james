import http from 'http'
import router from './router.js'

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    router(req.url, res)
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})