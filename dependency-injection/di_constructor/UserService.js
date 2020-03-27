class UsersService {
  constructor({ usersRepository, mailer, logger }) {
    this.usersRepository = usersRepository;
    this.mailer = mailer;
    this.logger = logger;
  }

  async findAll() {
    return this.usersRepository.findAll();
  }

  async addUser(user) {
    await this.usersRepository.addUser(user);
    this.logger.info(`User created: ${user.name}`);
    await this.mailer.sendConfirmationLink(user);
    this.logger.info(`Confirmation link sent: ${user.email}`);
  }
}

module.exports = UsersService;
