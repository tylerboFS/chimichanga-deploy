const express = require('express')
const app = express()
const port = 3000

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

app.get('/', (req, res) => {
  res.send('Hello You have reached the sever!')
})

app.get("/api/chimichangas", async (req, res) => {
  try{
    res.send(await prisma.chimichanga.findMany());
  }
  catch(err){
    res.sendStatus(500);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})