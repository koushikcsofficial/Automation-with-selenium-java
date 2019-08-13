$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/AutomationLearn/projectBDDframework/src/main/java/Features/amazonflow.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon First flow Test",
  "description": "",
  "id": "amazon-first-flow-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify Pay on Delivery",
  "description": "",
  "id": "amazon-first-flow-test;verify-pay-on-delivery",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Amazon Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Clicks on Customer Service",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Hover on payment pricing",
  "keyword": "And "
});
formatter.match({
  "location": "amazonflow.user_is_on_Amazon_Home_page()"
});
formatter.result({
  "duration": 20437614700,
  "status": "passed"
});
formatter.match({
  "location": "amazonflow.user_Clicks_on_Customer_Service()"
});
formatter.result({
  "duration": 4668624600,
  "status": "passed"
});
formatter.match({
  "location": "amazonflow.user_Hover_on_payment_pricing()"
});
formatter.result({
  "duration": 168269000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "",
  "description": "",
  "id": "amazon-first-flow-test;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "Click on each item, item \"\u003cnumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify user is on the \"\u003ccorrect\u003e\" page",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "amazon-first-flow-test;;",
  "rows": [
    {
      "cells": [
        "number",
        "correct"
      ],
      "line": 13,
      "id": "amazon-first-flow-test;;;1"
    },
    {
      "cells": [
        "2",
        "About Pay on Delivery"
      ],
      "line": 14,
      "id": "amazon-first-flow-test;;;2"
    },
    {
      "cells": [
        "3",
        "EMI (Easy Installments)"
      ],
      "line": 15,
      "id": "amazon-first-flow-test;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "",
  "description": "",
  "id": "amazon-first-flow-test;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "Click on each item, item \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify user is on the \"About Pay on Delivery\" page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "amazonflow.clicks_on_Pay_on_delivery(String)"
});
formatter.result({
  "duration": 6136890200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "About Pay on Delivery",
      "offset": 23
    }
  ],
  "location": "amazonflow.verify_user_is_on_the_correct_page()"
});
formatter.result({
  "duration": 800900,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027stepDefinitions.amazonflow.verify_user_is_on_the_correct_page() in file:/D:/AutomationLearn/projectBDDframework/target/classes/\u0027 with pattern [^verify user is on the \\\"([^\\\"]*)\\\" page$] is declared with 0 parameters. However, the gherkin step has 1 arguments [About Pay on Delivery]. \nStep: Then verify user is on the \"About Pay on Delivery\" page\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "",
  "description": "",
  "id": "amazon-first-flow-test;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "Click on each item, item \"3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify user is on the \"EMI (Easy Installments)\" page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "amazonflow.clicks_on_Pay_on_delivery(String)"
});
formatter.result({
  "duration": 4041118700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@id\u003d\u0027help-gateway-category-3\u0027]/div/div/div/ul/li[3]/a\"}\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027KOUSHIK-DEVELOP\u0027, ip: \u0027192.168.43.79\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 75.0.3770.90 (a6dcaf7e3ec6f..., userDataDir: C:\\Users\\koush\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:3878}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 06e1c37e4eeb2380dd1ea20b001187e4\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027help-gateway-category-3\u0027]/div/div/div/ul/li[3]/a}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pageLayer.amazonflowPageObject.clicks_on_Pay_on_delivery(amazonflowPageObject.java:23)\r\n\tat stepDefinitions.amazonflow.clicks_on_Pay_on_delivery(amazonflow.java:31)\r\n\tat ✽.When Click on each item, item \"3\"(D:/AutomationLearn/projectBDDframework/src/main/java/Features/amazonflow.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "EMI (Easy Installments)",
      "offset": 23
    }
  ],
  "location": "amazonflow.verify_user_is_on_the_correct_page()"
});
formatter.result({
  "status": "skipped"
});
});