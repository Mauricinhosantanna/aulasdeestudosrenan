import express from 'express' //type module
// const express = require("express") //type common js

//inicializando o express -new
const app = express()

app.get('/api/salario', (req, res) => {
    const  valorhora = Number (req.query.valorhora)
    const  horasTrabalhadas = Number (req.query.horasTrabalhadas)
    const salario = valorhora * horasTrabalhadas
    res.send({message:salario})})


app.listen(3000, () => {
 console.log('Server is running on http://localhost:3000')
})


app.get('/api/peso', (req, res) => {
    const  peso1 = Number (req.query.peso1)
    const  peso2 = Number (req.query.peso2)
    const  peso3 = Number (req.query.peso3)
    const  peso4 = Number (req.query.peso4)
    const  peso5 = Number (req.query.peso5)
    const media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5
    res.send({message:media})})


app.listen(3000, () => {
 console.log('Server is running on http://localhost:3000')
})