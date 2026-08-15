- Dependency Injection. The object receives some object that it needs to use instead of creating the object internally
- The component declares what it needs and some other part of the system decides on how to provide that
  - Ex.:
    - I have a microwave that uses electricity. It would be absurd to make the microwave create it's our powerplant. Instead, the microwave "asks" for electricity, and a powerplant provides. It we exchange the microwave for a toaster, the powerplant would still continue to provide the electricity, and the toaster would demand it.
- Inversion of Control. The microwave doesn't control the electricity. The powerplant does. Or better yet. The infrastructure decides who to provide the dependency (e.g. electricity)
  - Don't call us. We'll call you. Instead of my code calling the framework, the framework calls my code.
    - Ex.:

    ```ts
    @Controller()
    class UserController {
      @Get("/users")
      getUser() {}
    }
    ```

    - Another example:
      - Without IoC:
        - You enter a restaurant
          - You call the waiter
          - You ask for food
          - You ask for the bill
      - With IoC:
        - You enter a restaurant
          - The restaurant calls you to seat
          - It decides when to bring the food
          - When they finish, they call you to pay the bill

  - Framework -> calls my code
  - My code -> calls the library

- Composition root instantiates the dependencies. A DI Container automates this work
