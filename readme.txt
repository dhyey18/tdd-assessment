String Calculator TDD Kata
This project is an implementation of the String Calculator Kata using Test-Driven Development (TDD) principles. The goal is t- create a simple calculator that processes a string of comma-separated numbers and returns their sum. It follows TDD best practices, with a focus on incremental test-driven development and refactoring.

Features
- Handles a string of comma-separated numbers and returns their sum.
- Supports multiple delimiters such as ',','\n' (newline), and custom delimiters.
- Throws an error if any negative numbers are provided, listing all negative numbers found.
  Designed using TDD (Test-Driven Development), with tests written first and the code evolving through small, incremental steps.

Getting Started

Prerequisites
- Node.js (v12 or higher)
- NPM (v6 or higher)

Running Tests
- This project uses Jest for unit testing. To run the tests, use the following command:
 < npm test >

- This will run all tests in the StringCalculator.test.js file and output the test results.

Project Structure : 
- StringCalculator.js: The main logic for the string calculator.
- StringCalculator.test.js: Unit tests for the string calculator.
- package.json: Project dependencies and scripts.

TDD Approach
This project follows a strict TDD approach. The process consists of three main steps for each new feature or change:

1. Red: Write a failing test.
2. Green: Write the simplest code to pass the test.
3. Refactor: Clean up the code while ensuring all tests still pass.

- Frequent commits are made after each step, ensuring an iterative development process that can be traced through the commit history.

Contributing
- If you would like to contribute to this project, feel free to submit a pull request or open an issue.

Author
- Dhyey Patel