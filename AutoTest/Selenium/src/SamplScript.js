var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var firefox = require('selenium-webdriver/firefox');

// var driver = new webdriver.Builder().forBrowser('firefox').build();

let driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.firefox())
    .setFirefoxService(new firefox.ServiceBuilder(__dirname+"/../node_modules/geckodriver/geckodriver"))
    .build();

driver.get("http://example.selenium.jp/reserveApp");
driver.findElement(By.id("guestname")).sendKeys("サンプルユーザ");
driver.findElement(By.id("goto_next")).click();
driver.quit();
