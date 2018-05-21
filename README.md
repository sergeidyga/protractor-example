# Technical task
Test project for https://www.epam.com/carrers (using cucumber + protractor).

## Setup

```
yarn global add protractor cucumber webdriver-manager
yarn
```

Run only once to update webdriver-manager repos:
```
yarn run webdriver-update
```

Start the webdriver:
```
webdriver-manager start
```

Run the tests:
```
protractor cucumberConf.js
```
