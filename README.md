# Currency Converter

### By Art Weinstein

### A basic program that makes use of a currency exchange API to calculate the conversion of various currencies from dollars.

## Technologies Used

* HTML
* CSS
* JavaScript
* Webpack
* ESLint

## Description
This program takes an amount in USD (dollars) and converts the inputted amount to one of various currencies available for selection in the dropdown menu. The program converts currencies through the use of an API.

## Setup/Installation Requirements

1. [Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) this repository.
2. Open the program in VS Code or similar software.
3. Open a new Git Bash terminal within VS code or similar software.
4. Create a new .env file in the root directory by inputting "touch .env".
5. [Go to exchangerate-api.com](https://www.exchangerate-api.com/)
6. Create a new account and follow the prompts to generate your own API key for currency conversion.
7. The website will show you an example URL for where your personal API key should go.
8. In your .env file, on the first line write API_KEY=(you API here). Your API key should go after the API_KEY=.
9. Save your file.
10. In your terminal, type "npm install" to download necessary files.
11. In your terminal, type "npm run build" to build the webpack.
12. In your terminal, type "npm run start" to view and test the program and your API key.

## Known Bugs

* No bugs known at the moment.

## License

* [MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Art Weinstein

## Contact Information

[Email](artur.weintsein@gmail.com)