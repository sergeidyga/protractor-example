Feature: Smoke tests for Careers page

  @OutlineScenario
  Scenario Outline: Check main page components
    Given I am on "<url>" page
    Then page title is "<title>"
    Then heading text is displayed

    Examples:
      | url      | title   |
      | /careers | Careers |
