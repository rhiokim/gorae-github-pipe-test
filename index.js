const http = require('http')
const createHandler = require('github-webhook-handler')

const gitd = require('./lib/pull');
const port = process.env.PORT || 7777
const secret = process.env.SECRET || process.argv[2] || ''

const handler = createHandler({ path: '/webhook', secret: secret })

http.createServer((req, res) => {
}).listen(port)

console.log('port: ', port)
console.log('secret: ', secret)


