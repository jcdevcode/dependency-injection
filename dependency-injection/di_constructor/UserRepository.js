class UserRepository {
  async findAll(){
    console.log('Find all users..')
    return {}
  }

  async addUser(user){
    console.log('Adding user')
    return user.id
  }

  static async
}

module.exports = UserRepository