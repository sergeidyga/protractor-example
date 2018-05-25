@Smoke
Feature: Login page verifications

  Background:
    Given open page "/login"

  Scenario: Check login page components
    Then page title is "VisualCV"
    Then heading text is "VisualCV login"
    Then terms text is visible

  Scenario Outline: Check <linkText> link
    Then <linkText> link is visible
    Then <linkText> link is enabled
    Examples:
      | linkText              |
      | Login                 |
      | Sign up               |
      | Forgot your password? |
      | LinkedIn              |
      | Google                |
      | Privacy notice        |
      | Terms of service      |
