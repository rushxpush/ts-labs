class DIContainer {
  dependencies: any = new Map();

  constructor() {}

  register(dependency: any) {
    this.dependencies.set(dependency.constructor.name, dependency);
  }

  inject(token: string) {
    return this.dependencies.get(token);
  }
}

class UserRepository {
  constructor() {}

  getUser() {
    return "John";
  }
}

class UserService {
  userRepository: UserRepository | undefined;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  printUserName() {
    const userName: string = this.userRepository!.getUser();
    console.log(`The name of the user is: ${userName}`);
  }
}

const container = new DIContainer();

const userRepository = new UserRepository();

container.register(userRepository);

const userService = new UserService(
  container.inject(userRepository.constructor.name),
);

userService.printUserName();
