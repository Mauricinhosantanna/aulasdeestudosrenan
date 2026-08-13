import express from 'express' //type module
// const express = require("express") //type common js
const app = express()
app.use(express.json()) 
app.post('/api/somar', (req, res) => {
    const  num1 =  (req.body.num1)
    const  num2 =  (req.body.num2)
    res.send({resultado:num1 + num2})
})
const app = express()
app.use(express.json()) 
app.post('/api/salario', (req, res) => {
    const  valorHora =  (req.body.valorHora)
    const  horaTrabalhada =  (req.body.horaTrabalhada)
    res.send({Salario:valorHora + horaTrabalhada})
})



/*
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


app.get('/api/temperatura', (req, res) => {
    const tempcelsius = Number (req.query.tempcelsius)
    const tempfahrenheit = (tempcelsius * 9+ 160 ) / 5
    res.send({message:tempfahrenheit})})


    */
app.listen(3000, () => {
 console.log('Servidor rodando na porta 3000')
})