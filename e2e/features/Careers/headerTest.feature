Feature: Header tests for Careers page

  @OutlineScenario
  Scenario Outline: Check header functionality
    Given I am on "/careers" page
    Then menu item "<menuItem>" must have hidden state: "<isHidden>" when mouse is over

    Examples:
      | menuItem     | isHidden |
      | What We Do   | false    |
      | How We Do It | true     |
      | Our Work     | false    |
      | Insights     | true     |
      | About        | false    |
      | Careers      | true     |
