const UsersService = require('./UserService');
const assert = require('assert');

describe('Users service', () => {
  it('gets users', async () => {
    const users = [{
      id: 1,
      firstname: 'Joe',
      lastname: 'Doe'
    }];

    const usersRepository = {
      findAll: async () => {
        return users
      }
    };

    const usersRepository2 = {
      findAll: async () => {
        console.log('Otra implementación')
        return users
      }
    };

    const usersService = new UsersService(usersRepository2);
  
    assert.deepEqual(await usersService.getUsers(), users);
  });
});