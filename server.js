require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const path = require('path');

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

app.use("/", express.static(path.join(__dirname, './client/dist')));

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