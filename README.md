
# Didactic Octo Palm Tree Tracker

## Description

A simple HR application tracking employee manager relationships.  

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

This requires a mysql instance, it relies on env vars for user, host, port, password.  Otherwise npm i and node app.js.  To seed a db you can run the schema.sql and for test data test_seed.sql.

## Usage

node app.js and interact on CLI with the application.

## Credits and Questions

Please reach out by raising an issue if you have questions or suggestions.
dustin.davisson@gmail.com
https://github.com/Spikeophant

## License

This application is covered by Apache-2.0

## How to Contribute

PR's gladly accepted, more job informationa nd dept data would be good, tying managers to dept heads.
## Tests

in /local_dev/ is a docker compose that can spin up a testing mysql instance, use with docker compose up in the dir.
This instance will listen on localhost 3306 by derfaut.


npm test
    