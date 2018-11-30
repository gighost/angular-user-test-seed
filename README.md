# `angular-user-test-seed` — the seed for AngularJS apps

This project is a test application done with back end call to https://reqres.in/.
The update and delete calls do give success as response but the proper updation is not seen in the GET all api.
So any further manipulation in data is not done from client side and data is made to be driven via api calls.

The unit test for this application is not completed, and will be updated as time progress.

## Getting Started

To get you started you can simply clone the `angular-user-test-seed` repository and install the dependencies:

### Prerequisites

You need git to clone the `angular-user-test-seed` repository. .

We also use a number of Node.js tools to initialize and test `angular-user-test-seed`. You must have Node.js
and its package manager (npm) installed.

### Install Dependencies

We have two kinds of dependencies in this project: tools and AngularJS framework code. The tools
help us manage and test the application.

* We get the tools we depend upon and the AngularJS code via `npm`, the [Node package manager][npm].
* In order to run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on

We have preconfigured `npm` to automatically copy the downloaded AngularJS files to `app/lib` so we
can simply do:

```
npm install
```

Behind the scenes this will also call `npm run copy-libs`, which copies the AngularJS files and
other front end dependencies. After that, you should find out that you have two new directories in
your project.

* `node_modules` - contains the npm packages for the tools we need

*Note copying the AngularJS files from `node_modules` to `app/lib` makes it easier to serve the
files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Directory Layout

```
app/                  --> all of the source files for the application
  app.css               --> default stylesheet
  login/                --> the login view template and logic
    login.html            --> the partial template
    login.js              --> the controller logic
    login_test.js         --> tests of the controller
  home/                --> the home view template and logic
    home.html            --> the partial template
    home.js              --> the controller logic
    home_test.js         --> tests of the controller
  notfound/                --> the home view template and logic
    404.html            --> the partial template
    404Controller.js              --> the controller logic
    404_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file 
  scenarios.js          --> end-to-end scenarios to be run by Protractor
karma.conf.js         --> config file for running unit tests with Karma
package.json          --> Node.js specific metadata, including development tools dependencies
package-lock.json     --> Npm specific metadata, including versions of installed development tools dependencies
```

**Before starting Protractor, open a separate terminal window and run:**

```
npm start
```

In addition, since Protractor is built upon WebDriver, we need to ensure that it is installed and
up-to-date. The `angular-seed` project is configured to do this automatically before running the
end-to-end tests, so you don't need to worry about it. If you want to manually update the WebDriver,
you can run:


**Note:**
If JDK is not already installed, you can download it [here][jdk-download].



## Contact

For more information on AngularJS please check out [angularjs.org][angularjs].


[angularjs]: https://angularjs.org/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[local-app-url]: http://localhost:8000/index.html
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
[travis]: https://travis-ci.org/
[travis-docs]: https://docs.travis-ci.com/user/getting-started
