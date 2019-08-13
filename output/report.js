$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/AutomationLearn/projectBDDframework/src/main/java/Features/emiVerification.feature");
formatter.feature({
  "line": 1,
  "name": "ICICI",
  "description": "",
  "id": "icici",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Naviage upto personal loan emi",
  "description": "",
  "id": "icici;naviage-upto-personal-loan-emi",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User already at bank index page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title is Personal Banking",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Allow popup",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Mouse hover on Product tan and click Loans",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Personal Loan",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on EMI Calculator",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify that Personal Loan Emi Calculator is Opened",
  "keyword": "Then "
});
formatter.match({
  "location": "emiVerificationstepDefinition.open_bank_index()"
});
formatter.result({
  "duration": 16160651100,
  "status": "passed"
});
formatter.match({
  "location": "emiVerificationstepDefinition.title_check()"
});
formatter.result({
  "duration": 13678200,
  "status": "passed"
});
formatter.match({
  "location": "emiVerificationstepDefinition.allow_popup()"
});
formatter.result({
  "duration": 4324055500,
  "status": "passed"
});
formatter.match({
  "location": "emiVerificationstepDefinition.mouse_hover_on_Product_tan_and_click_Loans()"
});
formatter.result({
  "duration": 7853566200,
  "status": "passed"
});
formatter.match({
  "location": "emiVerificationstepDefinition.click_on_Personal_Loan()"
});
formatter.result({
  "duration": 7968511400,
  "status": "passed"
});
formatter.match({
  "location": "emiVerificationstepDefinition.click_on_EMI_Calculator()"
});
formatter.result({
  "duration": 6516210900,
  "status": "passed"
});
formatter.match({
  "location": "emiVerificationstepDefinition.verify_that_Personal_Loan_Emi_Calculator_is_Opened()"
});
formatter.result({
  "duration": 8005800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "",
  "description": "",
  "id": "icici;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Personal Loan Emi Calculator is present and opened",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters value in Loan Amount as \"\u003cLoanAmount\u003e\" and Interest Rate as \"\u003cInterestRate\u003e\" and Loan Term as \"\u003cLoanTerm\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Verify EMI is displayed as \"\u003cMonthlyEMI\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "icici;;",
  "rows": [
    {
      "cells": [
        "LoanAmount",
        "InterestRate",
        "LoanTerm",
        "MonthlyEMI"
      ],
      "line": 17,
      "id": "icici;;;1"
    },
    {
      "cells": [
        "130000",
        "14",
        "31",
        "Rs. 5,022"
      ],
      "line": 18,
      "id": "icici;;;2"
    },
    {
      "cells": [
        "140000",
        "15",
        "41",
        "Rs. 4,385"
      ],
      "line": 19,
      "id": "icici;;;3"
    },
    {
      "cells": [
        "150000",
        "16",
        "51",
        "Rs. 4,073"
      ],
      "line": 20,
      "id": "icici;;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "",
  "id": "icici;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Personal Loan Emi Calculator is present and opened",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters value in Loan Amount as \"130000\" and Interest Rate as \"14\" and Loan Term as \"31\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Verify EMI is displayed as \"Rs. 5,022\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "emiVerificationstepDefinition.Personal_Loan_Emi_Calculator_is_present_and_opened()"
});
formatter.result({
  "duration": 16357700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "130000",
      "offset": 37
    },
    {
      "val": "14",
      "offset": 67
    },
    {
      "val": "31",
      "offset": 89
    }
  ],
  "location": "emiVerificationstepDefinition.user_enters_value_in_Loan_Amount_as_and_Interest_Rate_as_and_Loan_Term_as(String,String,String)"
});
formatter.result({
  "duration": 10499825900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rs. 5,022",
      "offset": 28
    }
  ],
  "location": "emiVerificationstepDefinition.verify_EMI_is_displayed_as(String)"
});
formatter.result({
  "duration": 2086124300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "",
  "description": "",
  "id": "icici;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Personal Loan Emi Calculator is present and opened",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters value in Loan Amount as \"140000\" and Interest Rate as \"15\" and Loan Term as \"41\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Verify EMI is displayed as \"Rs. 4,385\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "emiVerificationstepDefinition.Personal_Loan_Emi_Calculator_is_present_and_opened()"
});
formatter.result({
  "duration": 2182847500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "140000",
      "offset": 37
    },
    {
      "val": "15",
      "offset": 67
    },
    {
      "val": "41",
      "offset": 89
    }
  ],
  "location": "emiVerificationstepDefinition.user_enters_value_in_Loan_Amount_as_and_Interest_Rate_as_and_Loan_Term_as(String,String,String)"
});
formatter.result({
  "duration": 8213458000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rs. 4,385",
      "offset": 28
    }
  ],
  "location": "emiVerificationstepDefinition.verify_EMI_is_displayed_as(String)"
});
formatter.result({
  "duration": 2079005700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "",
  "description": "",
  "id": "icici;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Personal Loan Emi Calculator is present and opened",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters value in Loan Amount as \"150000\" and Interest Rate as \"16\" and Loan Term as \"51\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Verify EMI is displayed as \"Rs. 4,073\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "emiVerificationstepDefinition.Personal_Loan_Emi_Calculator_is_present_and_opened()"
});
formatter.result({
  "duration": 12787100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150000",
      "offset": 37
    },
    {
      "val": "16",
      "offset": 67
    },
    {
      "val": "51",
      "offset": 89
    }
  ],
  "location": "emiVerificationstepDefinition.user_enters_value_in_Loan_Amount_as_and_Interest_Rate_as_and_Loan_Term_as(String,String,String)"
});
formatter.result({
  "duration": 10090748900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rs. 4,073",
      "offset": 28
    }
  ],
  "location": "emiVerificationstepDefinition.verify_EMI_is_displayed_as(String)"
});
formatter.result({
  "duration": 2083104200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Task Complete",
  "description": "",
  "id": "icici;task-complete",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "User is on EMI calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "user clicks on Bank logo",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "verify user is on Bank index page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Browser closes",
  "keyword": "And "
});
formatter.match({
  "location": "emiVerificationstepDefinition.user_is_on_EMI_calculator_page()"
});
formatter.result({
  "duration": 1006832700,
  "status": "passed"
});
formatter.match({
  "location": "emiVerificationstepDefinition.user_clicks_on_Bank_logo()"
});
formatter.result({
  "duration": 8119280000,
  "status": "passed"
});
formatter.match({
  "location": "emiVerificationstepDefinition.verify_user_is_on_Bank_index_page()"
});
formatter.result({
  "duration": 1009183800,
  "status": "passed"
});
formatter.match({
  "location": "emiVerificationstepDefinition.browser_closes()"
});
formatter.result({
  "duration": 820842400,
  "status": "passed"
});
});