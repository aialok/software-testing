## Software Testing

### Jest vs React Testing Library

When it comes to testing React applications, two popular choices are Jest and React Testing Library. Here's a comparison between the two:

#### Jest

- Jest is a powerful testing framework that is widely used in the React community.
- It provides a rich set of features for writing and running tests, including support for mocking, code coverage, and snapshot testing.
- Jest has a built-in test runner and assertion library, making it easy to write and execute tests.
- It also integrates well with other tools commonly used in the React ecosystem, such as Babel and webpack.

#### React Testing Library

- React Testing Library, on the other hand, focuses on testing the behavior of React components from the user's perspective.
- It encourages writing tests that closely resemble how a user would interact with the application.
- React Testing Library provides a simple and intuitive API for querying and interacting with components, making it easy to write readable and maintainable tests.
- It promotes best practices for testing accessibility and encourages testing components in isolation.


#### Test Driven  Development

- This section covers the concept of Test Driven Development (TDD), which is a software development process that emphasizes writing tests before writing the actual code. It helps in improving code quality, reducing bugs, and promoting better design practices.

#### Jest Watch Mode

- Jest has a built-in watch mode that can be used to automatically run tests whenever a file changes. This can be useful for quickly iterating on a feature or fixing a bug.
- To enable watch mode, run the following command:
```
npm test -- --watch
```
- This will start Jest in watch mode and run all tests in the current directory. It will also watch for changes to any files in the current directory and rerun the tests whenever a file changes.

