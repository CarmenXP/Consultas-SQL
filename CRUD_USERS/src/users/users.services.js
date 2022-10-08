const {getAllUsers, getUserById, createUser} = require('./users.controllers')

const getAllUsers = (req, res) =>{
    const data = getAllUsers()
    res.status(200).json(data)
}

const getUserById = (req, res) =>{
    const id = req.params.id
    const data = getUserById(id)
    if(data){
        res.status(200).json(data)
    }else{
        res.status(404).json({id: id, message: 'ID no encontrado'})
    }
}

const createNewUser = (req, res) => {
    const data = req.body
    if(data){
        const user = createNewUser(data)
        res.status(201).json(user)
    }else{
        res.status(400).json({message: 'Missing data'})
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser
}