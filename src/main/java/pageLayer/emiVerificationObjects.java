package pageLayer;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import utilities.testBase;

public class emiVerificationObjects extends testBase{
	
	public emiVerificationObjects() {
		PageFactory.initElements(driver, this);
	}
	
	public String Validate_Page_Title() {
		return driver.getTitle();
	}
	
	public void click_allow() {
		WebDriverWait wait = new WebDriverWait(driver,20);  
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(),'Allow')]")));
		driver.findElement(By.xpath("//*[contains(text(),'Allow')]")).click();
	}
	
	public void hover_on_products() {
		WebElement ele = driver.findElement(By.xpath("//*[@class='personal-mobile-1 shorter']"));
		Actions act = new Actions(driver);
		act.moveToElement(ele).perform();
		System.out.println("Hover on products done");
	}
	
	public void click_on_loans() {
		driver.findElements(By.xpath("//*[text()='Loans']")).get(0).click();
	}
	
	public void click_on_personal_loans() {
		driver.findElements(By.xpath("//*[@class='lhsnavigation']/li[5]")).get(0).click();
	}
	
	public void click_on_emiCalculator() {
		driver.findElement(By.xpath("//*[text()='EMI Calculator ']")).click();
	}
	
	public String verify_emiCalculator() {
		return driver.getTitle();
	}
	
	public void click_on_logo() throws InterruptedException {
		WebElement element = driver.findElement(By.xpath("//*[@class='Logo']"));
		((JavascriptExecutor)driver).executeScript("arguments[0].scrollIntoView();", element);
		Thread.sleep(2000);
		element.click();
	}
	
	public void finish_operation() {
		driver.close();
		driver.quit();
	}

}
