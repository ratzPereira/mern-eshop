import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ratz',
    email: 'ratz@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Carol',
    email: 'carol@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
