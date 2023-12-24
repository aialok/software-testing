# Software Testing

<!-- toc -->

- [Jest vs React Testing Library](#jest-vs-react-testing-library)
  - [Jest](#jest)
  - [React Testing Library](#react-testing-library)
- [Test Driven Development](#test-driven-development)
- [Jest Watch Mode](#jest-watch-mode)
- [Jest Filtering Tests](#jest-filtering-tests)
- [Naming Conventions](#naming-conventions)
- [Code Coverage](#code-coverage)
- [Assertions](#assertions)
- [RTL Queries](#rtl-queries)

<!-- tocstop -->

# Jest vs React Testing Library

When it comes to testing React applications, two popular choices are Jest and React Testing Library. Here's a comparison between the two:

## Jest

- Jest is a powerful testing framework that is widely used in the React community.
- It provides a rich set of features for writing and running tests, including support for mocking, code coverage, and snapshot testing.
- Jest has a built-in test runner and assertion library, making it easy to write and execute tests.
- It also integrates well with other tools commonly used in the React ecosystem, such as Babel and webpack.

## React Testing Library

- React Testing Library, on the other hand, focuses on testing the behavior of React components from the user's perspective.
- It encourages writing tests that closely resemble how a user would interact with the application.
- React Testing Library provides a simple and intuitive API for querying and interacting with components, making it easy to write readable and maintainable tests.
- It promotes best practices for testing accessibility and encourages testing components in isolation.

# Test Driven Development

- This section covers the concept of Test Driven Development (TDD), which is a software development process that emphasizes writing tests before writing the actual code. It helps in improving code quality, reducing bugs, and promoting better design practices.

# Jest Watch Mode

- Jest has a built-in watch mode that can be used to automatically run tests whenever a file changes. This can be useful for quickly iterating on a feature or fixing a bug.
- To enable watch mode, run the following command:

```
npm test -- --watch
```

- This will start Jest in watch mode and run all tests in the current directory. It will also watch for changes to any files in the current directory and rerun the tests whenever a file changes.

# Jest Filtering Tests

- Jest provides a number of ways to filter tests. This can be useful when you want to run only a subset of tests or exclude certain tests from running.
- To run only a subset of tests, you can use the -t flag followed by a regular expression that matches the names of the tests you want to run. For example:

```
npm test -- -t "should render a list of items"
```

- This will run only the tests that match the regular expression "should render a list of items". You can also use the -t flag to exclude certain tests from running. For example:

```
npm test -- -t "should not render a list of items"
```

- This will run all tests except for the ones that match the regular expression "should not render a list of items".

#Grouping Tests

- Jest provides a number of ways to group tests. This can be useful when you want to run only a subset of tests or exclude certain tests from running.
- Describe blocks can be used to group tests together. For example:

```js
describe("App", () => {
  it("should render a list of items", () => {
    // ...
  });

  it("should not render a list of items", () => {
    // ...
  });
});
```

# Naming Conventions

- Jest provides different naming convention to of files and folders. This can be useful when you want to run only a subset of tests or exclude certain tests from running.
- `.test.js` or `.test.jsx`
- `.spec.js` or `.spec.jsx`
- `__tests__` folder with .js or .jsx files

# Code Coverage

- Jest provides a built-in code coverage tool that can be used to measure how much of your code is covered by tests. This can be useful for identifying areas of your code that are not being tested and improving test coverage.
- To enable code coverage, run the following command:

```
npm test -- --coverage
```

- Types of coverage:

  - Statement coverage - how many statements are executed
  - Branch coverage - how many branches are executed
  - Function coverage - how many functions are executed
  - Line coverage - how many lines are executed

- code coverage package.json configuration:

```js
"jest": {
    "coverageThreshold": {
      "global": {
        "branches": 100,
        "functions": 100,
        "lines": 100,
        "statements": 100
      }
    }
}

 "coverage": "react-scripts test --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}' --collectCoverageFrom='!src/components/**/*.{types, stories, test, spec, constants}.{ts,tsx}' "
```

# Assertions

- Jest provides a number of built-in assertions that can be used to test the behavior of your code. This can be useful for writing tests that are easy to read and maintain.
- To use an assertion, you can use the expect function followed by the assertion you want to make. For example:

```
expect(value).toBe(expectedValue);
expect(value).toEqual(expectedValue);
expect(value).toBeNull();
expect(value).toBeUndefined();
expect(value).toBeDefined();
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeGreaterThan(number);
expect(value).toBeGreaterThanOrEqual(number);
expect(value).toBeLessThan(number);
expect(value).toBeLessThanOrEqual(number);
expect(value).toBeCloseTo(number, numDigits);
expect(value).toMatch(regexpOrString);
expect(value).toContain(item);
expect(array).toContainEqual(item);
expect(func).toThrow(error);
expect(func).toThrowErrorMatchingSnapshot();
expect(func).toThrowErrorMatchingInlineSnapshot();
expect(value).toHaveProperty(keyPath, value?);
```

# RTL Queries

- React Testing Library provides a number of built-in queries that can be used to query the DOM. This can be useful for writing tests that are easy to read and maintain.
- To use a query, you can use the screen object followed by the query you want to make. For example:

```
screen.getByText(text);
screen.getByLabelText(text);
screen.getByPlaceholderText(text);
screen.getByAltText(text);
screen.getByTitle(text);
screen.getByDisplayValue(value);
screen.getByRole(role, options?);
screen.getByTestId(id);
screen.getAllByText(text);
screen.getAllByLabelText(text);
screen.getAllByPlaceholderText(text);
screen.getAllByAltText(text);
screen.getAllByTitle(text);
screen.getAllByDisplayValue(value);
screen.getAllByRole(role, options?);
screen.getAllByTestId(id);
screen.queryByText(text);
screen.queryByLabelText(text);
screen.queryByPlaceholderText(text);
screen.queryByAltText(text);
screen.queryByTitle(text);
screen.queryByDisplayValue(value);
screen.queryByRole(role, options?);
screen.queryByTestId(id);
screen.queryAllByText(text);
screen.queryAllByLabelText(text);
screen.queryAllByPlaceholderText(text);
screen.queryAllByAltText(text);
screen.queryAllByTitle(text);
screen.queryAllByDisplayValue(value);
screen.queryAllByRole(role, options?);
screen.queryAllByTestId(id);
screen.findByText(text);
screen.findByLabelText(text);
screen.findByPlaceholderText(text);
screen.findByAltText(text);
screen.findByTitle(text);
screen.findByDisplayValue(value);
screen.findByRole(role, options?);
screen.findByTestId(id);
screen.findAllByText(text);
screen.findAllByLabelText(text);
screen.findAllByPlaceholderText(text);
screen.findAllByAltText(text);
screen.findAllByTitle(text);
screen.findAllByDisplayValue(value);
screen.findAllByRole(role, options?);
screen.findAllByTestId(id);
```
