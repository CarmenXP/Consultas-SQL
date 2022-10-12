const express = require('express')

const app = express()

const todoRouter = require('./todos/todos.router')
// convierte la data para recibir en formato json
app.use(express.json())

/* 
3 tipos de archivos para dividir la aplicación
rutas -> paths y verbos http
controladores -> lógica y acciones referentes a la database (CRUD)
servicios -> todo lo relacionado al req y res
*/

//Definir rutas

app.get('/', (req, res) =>{
    res.status(200).json({message: 'Está funcionando'})
})

app.use('/', todoRouter)
/*
app.get('/todos', (req, res) =>{
    res.status(200).json(database)
})
app.get('/todos/:id', (req, res)=>{
    const id = Number(req.params.id)

    const data = database.filter(todo => todo.id === id)

    if(data.length !==0){
        res.status(200).json({my_id: id, data : data[0]});
    }else{
        res.status(404).json({message: 'error en ID'})
    }
    
})
app.post('/todos', (req, res) =>{

    const {id, title} = req.body
    //valores falsy: null, undefined, '', 0, false
    //valores truty 'lokj', 1, {}, [], true
    if(!id || !title){
        res.status(400).json({message: 'datos no encontrados'})
    }else{
        database.push({
            id,
            title,
            is_completed: false
        })
        res.status(200).json(database)
    }
})
*/
//Levantando servidor
app.listen(8000, ()=>{
    console.log('El servidor corre en el puerto 8000')
})