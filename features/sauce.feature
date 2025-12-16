Feature: Validations for sauce demo webapp

@Sauce
Scenario Outline: Login Validations
Given I launch the application
When I login using "<username>" and "<password>"
When I click on a product to add to cart
Examples:
| username      | password      |
| standard_user | secret_sauce  |