package stepDefinitions;


import org.junit.Assert;
import org.openqa.selenium.By;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageLayer.emiVerificationObjects;
import utilities.testBase;

public class emiVerificationstepDefinition extends testBase {
	emiVerificationObjects emiVerification = new emiVerificationObjects();
	
	@Given("^User already at bank index page$")
	public void open_bank_index() {
		testBase.initialization();
		System.out.println("Browser opened");
	}
	
	@When("^title is Personal Banking$")
	public void title_check() {
		String title = emiVerification.Validate_Page_Title();
		Assert.assertEquals("Personal Banking, Online Banking Services - ICICI Bank", title);
	}
	
	@Then("^Allow popup$")
	public void allow_popup() throws Throwable{
		emiVerification.click_allow();
		System.out.println("Pop up Allowed");
		Thread.sleep(4000);
	}
	
	@When("^Mouse hover on Product tan and click Loans$")
	public void mouse_hover_on_Product_tan_and_click_Loans() throws Throwable {

		emiVerification.hover_on_products();
		Thread.sleep(2000);
		
		emiVerification.click_on_loans();
		System.out.println("Click on loans done");
		Thread.sleep(4000);
	}
	@When("^Click on Personal Loan$")
	public void click_on_Personal_Loan() throws Throwable {
		emiVerification.click_on_personal_loans();
		System.out.println("Click on personal loans done");
		Thread.sleep(4000);
	}
	
	@When("^Click on EMI Calculator$")
	public void click_on_EMI_Calculator() throws Throwable {
		emiVerification.click_on_emiCalculator();
		System.out.println("Click on EMI Calculator done");
		Thread.sleep(4000);
	}
	
	@Then("^Verify that Personal Loan Emi Calculator is Opened$")
	public void verify_that_Personal_Loan_Emi_Calculator_is_Opened() throws Throwable {
		String title = emiVerification.Validate_Page_Title();
		Assert.assertEquals("Personal Loan EMI Calculator, Online Monthly EMI Calculator - ICICI Bank Personal Loans", title);
	    System.out.println("Verified");
	}
	
	@Given("^Personal Loan Emi Calculator is present and opened$")
	public void Personal_Loan_Emi_Calculator_is_present_and_opened() throws Throwable {
		driver.navigate().refresh();
	}
	
	@When("^User enters value in Loan Amount as \"([^\"]*)\" and Interest Rate as \"([^\"]*)\" and Loan Term as \"([^\"]*)\"$")
	public void user_enters_value_in_Loan_Amount_as_and_Interest_Rate_as_and_Loan_Term_as(String arg1, String arg2, String arg3) throws Throwable {
		driver.switchTo().frame("paymframe");
		driver.findElements(By.xpath("//*[@id='loanAmount']")).get(0).clear();
		driver.findElements(By.xpath("//*[@id='loanAmount']")).get(0).sendKeys(arg1);
		System.out.println("Loan amount taken");
		driver.switchTo().defaultContent();
		Thread.sleep(2000);

		driver.switchTo().frame("paymframe");
		driver.findElements(By.xpath("//*[@id='interestRate']")).get(0).clear();
		driver.findElements(By.xpath("//*[@id='interestRate']")).get(0).sendKeys(arg2); 
		System.out.println("Interest taken");
		driver.switchTo().defaultContent();
		Thread.sleep(2000);

		driver.switchTo().frame("paymframe");
		driver.findElements(By.xpath("//*[@id='loanTerm']")).get(0).clear();
		driver.findElements(By.xpath("//*[@id='loanTerm']")).get(0).sendKeys(arg3);
		System.out.println("Loan term taken");
		driver.switchTo().defaultContent();
		Thread.sleep(2000);
		
		//click on blank area to change the data
		driver.switchTo().frame("paymframe");
		driver.findElements(By.xpath("//*[@class='row toolSize']")).get(0).click();
		driver.switchTo().defaultContent();
		Thread.sleep(1000);
	}
	
	@Then("^Verify EMI is displayed as \"([^\"]*)\"$")
	public void verify_EMI_is_displayed_as(String arg1) throws Throwable {
		driver.switchTo().frame("paymframe");
		String DefaultString = driver.findElements(By.xpath("//*[@id=\"monthlyRepayment\"]")).get(0).getText().toString().trim();
		System.out.println(DefaultString);
		System.out.println(arg1);
		
		Assert.assertEquals(arg1, DefaultString);
		driver.switchTo().defaultContent();
		Thread.sleep(2000);
		}
	@Given("^User is on EMI calculator page$")
	public void user_is_on_EMI_calculator_page() throws Throwable {
		String title = emiVerification.Validate_Page_Title();
		Assert.assertEquals("Personal Loan EMI Calculator, Online Monthly EMI Calculator - ICICI Bank Personal Loans", title);
		Thread.sleep(1000);
	}

	@When("^user clicks on Bank logo$")
	public void user_clicks_on_Bank_logo() throws Throwable {
		emiVerification.click_on_logo();
		Thread.sleep(4000);
	}

	@Then("^verify user is on Bank index page$")
	public void verify_user_is_on_Bank_index_page() throws Throwable {
		String title = emiVerification.Validate_Page_Title();
		Assert.assertEquals("Personal Banking, Online Banking Services - ICICI Bank", title);
		emiVerification.click_allow();
		Thread.sleep(1000);
	}

	@Then("^Browser closes$")
	public void browser_closes() throws Throwable {
		emiVerification.finish_operation();
	}

}