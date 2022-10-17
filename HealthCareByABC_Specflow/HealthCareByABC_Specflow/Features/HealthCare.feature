Feature: HealthCare
In order to test search functionality on 
HealthCare Website
As a developer
I want to ensure functionality is working end to end

@HealthCareByABC_For_User
Scenario: A detailed test through the HealthCareByABC Website
Given I have navigated to HealthCareByABC website
And I pressed Register with Registeration keyword
And After Registeration I go to Login
And In Login I enter my registered account
And After Login User Portal will be opened
And In User Portal you can check Categories
And In User Portal you can also check Medicines
And I click on Add to Cart
When I click on Pay now
Then Payment Receipt should be received

@HealthCareByABC_For_Admin
Scenario: A detailed Admin test through the HealthCareByABC Website
Given I have navigated to HealthCareByABC website
And I go to Login
And I enter Admin Credentials
And After Login Admin Portal will be opened
And Admin can view and edit categories
And Admin can View and edit medicines
When Admin adds Medicine
Then Medicines are updated






