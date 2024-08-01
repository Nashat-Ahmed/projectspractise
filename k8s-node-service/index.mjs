import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/",(req,res)=>{
    const message=`hello nashaat,i am Pod ${os.hostname()} :version 1.2.1`
    res.send(message)
})

app.listen(PORT, ()=>{
    console.log(`webserver is listenning at port ${PORT} `)
    console.log(os.hostname())
})