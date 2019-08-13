package utilities;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;

public class testBase {
	public static WebDriver driver;
	public static Properties prop;
	
	public testBase(){
		try {
			prop = new Properties();
			FileInputStream fis = new FileInputStream(
					"D:\\AutomationLearn\\projectBDDframework\\src\\main\\java\\configurations\\config.properties"
					);
			prop.load(fis);
		}catch(IOException e){
			e.getMessage();
		}
		
	}
	
	public static void initialization() {
		String browsername = prop.getProperty("browser");
		if(browsername.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver", "D:\\Automation needs\\chromedriver.exe");
			driver = new ChromeDriver();
		}else if(browsername.equals("Firefox")) {
			System.setProperty("webdriver.gecko.driver", "D:\\Automation needs\\geckodriver.exe");
			driver = new FirefoxDriver();
		}
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--disable-notifications");
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.get(prop.getProperty("url"));
	}

}
