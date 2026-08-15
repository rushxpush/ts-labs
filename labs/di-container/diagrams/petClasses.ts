interface Pet {
  name: string;
  breed: string;
  age: number;
}

class PetController {
  constructor(private readonly manager: PetManager) {}

  get() {}
  getById(id: string) {}
  post(pet: Pet) {}
  put(pet: Pet) {}
  delete(id: string) {}
}

class PetManager {
  constructor(private readonly repository: PetRepository) {}

  getAll() {}
  getById(id: string) {}
  create(pet: Pet) {}
  update(pet: Pet) {}
  delete(id: string) {}
}

class PetRepository {
  constructor(private readonly context: DbContext) {}

  getAll() {}
  getById(id: string) {}
  insert(pet: Pet) {}
  update(pet: Pet) {}
  delete(id: string) {}
}

class DbContext {
  constructor() {}

  // Etc.
}
