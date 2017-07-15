# Recipes Frontend

<a href="https://travis-ci.org/vjwilson/recipes-frontend"><img src="https://api.travis-ci.org/vjwilson/recipes-frontend.svg?branch=master" alt="TravisCI build status tag" /></a>
<a href="https://coveralls.io/github/vjwilson/recipes-frontend?branch=master"><img src="https://coveralls.io/repos/github/vjwilson/recipes-frontend/badge.svg?branch=master" alt="Coveralls test coverage status" /></a>

This is the Node/Express API for a recipes app.

## Getting Started

Clone the repo, switch to the cloned directory, and install the Node dependencies.

        npm install

To run the app,

        npm start

## Tests

The tests are watched by the `npm start` task. To run the tests once by themselves,

        npm test

## Building and deploying

To build the app into a `/dist` folder,

        npm build

To deploy the app,

        npm deploy
