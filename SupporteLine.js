var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('firefox')
.build();

driver.get('https://supportlinebr.net/login');
driver.findElement(By.name('logLogin')).sendKeys('brcryptomoedas');
driver.findElement(By.name('logSenha')).sendKeys('medeiros@123');
driver.findElement(By.className('btn btn-default btn-login')).click();
//driver.findElements(By.className("cheese"));

driver.sleep(10000);


driver.findElement(By.xpath('/html/body/div[1]/div/div[3]/div[3]/div[1]/div/div[2]/div[1]/div/div[2]'))
.then(span => span.getText())
.then(text => console.log(text))

//console.log(texto.getText());

driver.quit();


