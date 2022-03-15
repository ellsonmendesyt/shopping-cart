const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({static: 'public'})
const port=4000;
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
// server.use((req, res, next) => {
//   if (req.method === 'POST') {
//     req.body.createdAt = Date.now()
//   }
//   // Continue to JSON Server router
//   next()
// })

// Use default router
server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running')
})







/*

const express = require('express')


const app = express();
app.use(express.static('public'));


const port = 3000;


app.get('/', (req,res, next)=>{
    res.send('ola')
})

app.listen(port,()=>{
    console.log('servidor ativo')
})

*/



























/*
server.use(middlewares)
server.use(router)

server.listen(4000, ()=>{
    console.log('server is active')
})*/