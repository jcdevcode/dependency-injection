class UserRepository {
  static async findAll(){
    console.log('Find all users...')
    return {}
  }

  static async addUser(user){
    console.log('Adding user')
    return true
  }

}

module.exports = UserRepository