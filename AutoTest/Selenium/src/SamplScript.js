var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;

// ここの記述は[geckodriver]がスクリプト実行時のカレントディレクトに置かれていれば必要ない。
// var firefox = require('selenium-webdriver/firefox');
// let driver = new webdriver.Builder()
//     .withCapabilities(webdriver.Capabilities.firefox())
//     .setFirefoxService(new firefox.ServiceBuilder(__dirname+"/./geckodriver"))
//     .build();

var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.get("http://example.selenium.jp/reserveApp");
driver.findElement(By.id("guestname")).sendKeys("サンプルユーザ");
driver.findElement(By.id("goto_next")).click();
// warning:[selenium-webdriver]が最新バージョン(4-alpha)だとdriver.quitでエラーになる。
driver.quit();
