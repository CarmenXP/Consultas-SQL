const {getAllUsers, getUserById, createUser} = require('./users.controllers')

const AllUsers = (req, res) =>{
    const data = getAllUsers()
    res.status(200).json(data)
}

const UserById = (req, res) =>{
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
    if(data.first_name &&
        data.last_name &&
        data.email &&
        data.password &&
        data.birthday
        ){
        const user = createUser(data)
        res.status(201).json(user)
    }else{
        res.status(400).json({message: 'Missing data'})
    }
}

module.exports = {
    AllUsers,
    UserById,
    createNewUser
}