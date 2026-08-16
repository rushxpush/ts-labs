class DIContainer {
  dependencies: Map<string, string> = new Map();

  constructor() {}

  register(dependency: any) {
    this.dependencies.set(dependency.name, dependency);
  }

  inject(token: string) {
    const reference: any = this.dependencies.get(token);
    const instance = new reference();
    return instance;
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

container.register(UserRepository);

const userService = new UserService(container.inject(UserRepository.name));

userService.printUserName();
