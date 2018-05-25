# Technical task
Test project for https://www.epam.com/carrers (using cucumber + protractor).

## Setup

```
yarn global add protractor cucumber webdriver-manager
yarn
```

Run the tests:
```
yarn test
```

Debug
```
yarn --inspect-brk test
```
Then open chrome inspector: Enter _"chrome://inspect/#devices"_ in browser, find the current running target and click “Inspect”
