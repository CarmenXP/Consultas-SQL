const express = require('express')
const app = express()
const userRouter = require('./users/users.router')
const PORT = 8000

app.use(express.json())

app.get('/', (req, res) =>{
    res.status(200).json({
        message: 'Funcionando'
    })
})

app. use('/', userRouter)

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})