const UsersRepository = require('./UserRepository');
const UsersService = require('./UserService');
const sinon = require('sinon') ;
const assert = require('assert');

describe('Users service', () => {
  it('gets users', async () => {
    const users = [{
      id: 1,
      firstname: 'Joe',
      lastname: 'Doe'
    }];

    sinon.stub(UsersRepository, 'findAll', () => {
      return Promise.resolve(users)
    });

    assert.deepEqual(await UsersService.getUsers(), users);
  });
});