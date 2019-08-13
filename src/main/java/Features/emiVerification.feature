Feature: ICICI

Scenario: Naviage upto personal loan emi 
		Given User already at bank index page
		When title is Personal Banking
		Then Allow popup
		When Mouse hover on Product tan and click Loans
		And Click on Personal Loan
		And Click on EMI Calculator
		Then Verify that Personal Loan Emi Calculator is Opened
Scenario Outline:
		Given Personal Loan Emi Calculator is present and opened
		When  User enters value in Loan Amount as "<LoanAmount>" and Interest Rate as "<InterestRate>" and Loan Term as "<LoanTerm>"
		Then Verify EMI is displayed as "<MonthlyEMI>"
		
		Examples:
		|LoanAmount|InterestRate|LoanTerm|MonthlyEMI|
		|130000|14|31|Rs. 5,022|
		|140000|15|41|Rs. 4,385|
		|150000|16|51|Rs. 4,073|
		
Scenario: Task Complete
		Given User is on EMI calculator page
		When user clicks on Bank logo
		Then verify user is on Bank index page 
		And Browser closes
		