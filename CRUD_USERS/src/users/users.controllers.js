const uuid = require('uuid')

const usersDB = [
    {
        id: uuid.v4(),
        first_name: 'Carmen',
        last_name: 'Xocua',
        email: 'carmen_carmen@gmail.com',
        password: '123456',
        birthday: '1987/06/24'
    },
    {
        id: uuid.v4(),
        first_name: 'Miriam',
        last_name: 'XP',
        email: 'mir_mir@gmail.com',
        password: '1234567',
        birthday: '1990/07/21'
    },
    {
        id: uuid.v4(),
        first_name: 'Esmeralda',
        last_name: 'RC',
        email: 'esme_esme@hotmail.om',
        password: '1234567',
        birthday: '1987/03/21'
    }
]

const getAllUsers = () =>{
    return usersDB
}

const getUserById = (id) =>{
    const data = usersDB.find(user => user.id == id)
}

const createUser = (data) =>{
    const newUser = {
        id: uuid.v4(),
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        birthday: data.birthday
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}