const uuid = require('uuid')


const todoDB = [{
    id: 1,
    title: 'Título 1',
    is_completed: false
},
{
    id: 2,
    title: 'Título 2',
    is_completed: false
},
{
    id: 3,
    title: 'Título 3',
    is_completed: false
}]

const getAllTodos =()=>{
    return todoDB
}

const getTodoById = (id) =>{
    const data = todoDB.find(todo => todo.id == id)
    return data
}

const createTodo = (title) =>{
    const newTodo = {
        id: uuid.v4(),
        title,
        is_complete: false
    }
    todoDB.push(newTodo)
    return newTodo
}

module.exports ={
    getAllTodos,
    getTodoById,
    createTodo
}