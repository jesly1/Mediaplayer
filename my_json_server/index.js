const jsonServer=require('json-server')
const mediaPlayerServer=jsonServer.create()
const router=jsonServer.router('db.json')
const middleware=jsonServer.defaults()
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)
const port =5000;
mediaPlayerServer.listen(port,()=>{
    console.log(`Server is up & running in port  ${port}`)
})