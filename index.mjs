import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/",(req,res)=>{
    const message=`hello nashaat,i am pod ${os.hostname()}`
    res.send(message)
})

app.listen(PORT,()=>{
    console.log(`webserver is listenning at port ${PORT} `)
    console.log(os.hostname())
})