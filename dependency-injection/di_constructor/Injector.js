const UserService = require('./UserService')
const UserRepository = require('./UserRepository')
const Mailer = require('./Mailer')
const Logger = require('./Logger')
const User = require('./User')
const ExpertLogger = require('./ExpertLogger')


const usersRepository = new UserRepository()
const mailer = new Mailer()
const logger = new Logger()

// Dependency Injection
const userServiceImpl = new UserService({usersRepository, mailer, logger})




const userToAdd = new User(1, 'Julio Cesar', 'julio@vetta.io')
userServiceImpl.addUser(userToAdd)





