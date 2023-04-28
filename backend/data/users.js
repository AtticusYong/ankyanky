import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jackie Chan',
        email: 'jackie@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Michelle Yeoh',
        email: 'michelle@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users