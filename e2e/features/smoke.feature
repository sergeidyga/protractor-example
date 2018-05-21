Feature: Smoke tests for Careers page

  @OutlineScenario
  Scenario Outline: Check main page components
    Given I am on "<url>" page
    Then page title is "<title>"

    Examples:
      | url      | title   |
      | /careers | Careers |
