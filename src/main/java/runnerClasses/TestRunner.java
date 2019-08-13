package runnerClasses;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="D:\\AutomationLearn\\projectBDDframework\\src\\main\\java\\Features\\emiVerification.feature"
		, glue = {"stepDefinitions"},
		format = {"pretty","html:output"}
		)

public class TestRunner {

}
