Feature: Validations for sauce demo webapp

@Sauce
Scenario Outline: Login Validations
Given I launch the application
#When I login using "<username>" and "<password>"
Examples:
| username      | password      |
| standard_user | secret_sauce  |