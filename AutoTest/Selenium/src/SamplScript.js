var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;

// ここの記述は[geckodriver]がこのスクリプトと同一階層に置かれていれば必要ない。
// var firefox = require('selenium-webdriver/firefox');
// let driver = new webdriver.Builder()
//     .withCapabilities(webdriver.Capabilities.firefox())
//     .setFirefoxService(new firefox.ServiceBuilder(__dirname+"/./driver/geckodriver"))
//     .build();

// warning:[selenium-webdriver]が最新バージョン(4-alpha)だとdriver.quitでエラーになる。
var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.get("http://example.selenium.jp/reserveApp");
driver.findElement(By.id("guestname")).sendKeys("サンプルユーザ");
driver.findElement(By.id("goto_next")).click();
driver.quit();
