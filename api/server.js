const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({static: 'public'})
const port=4000;
 
server.use(middlewares)


server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})


server.use(jsonServer.bodyParser)

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