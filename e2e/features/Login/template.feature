@Ignore
Feature: Login page verifications

  Background:
    When open page "/sample"
    Then url is/contains "/sample"

  Scenario: Check login page components
    When click "Wiki" (in input)/button/link:?
    When type "My text"

    Then (in input)/button/link is/contains "My text"
    Then "My text" input/button/link:? is disabled/enabled

    When fill form
      | Field Name 1 | Field Name 2 | Field Name 3 |
      | text         | text         | text         |

    When fill form
      | DATE: Date field | CHECKBOX: Checkbox field | RADIO: Radio button title | DROPDOWN: title |
      | 22/11/1988       | check/uncheck            | select                    | value           |
#    Interacting with specific Field types should be configurable in commonElementsWrapper
