var nodemailer = require('nodemailer');
var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('firefox')
.build();




driver.get('https://moneytopbrazil.com/painel/login.php');
driver.findElement(By.name('usuario')).sendKeys('brcryptomoedas');
driver.findElement(By.className('btn btn-warning pull-center')).click();
driver.sleep(10000);
driver.findElement(By.name('senha')).sendKeys('medeiros@123');
driver.findElement(By.className('btn btn-danger pull-right')).click();
//driver.findElements(By.className("cheese"));

driver.wait(until.elementLocated(By.xpath('//*[@id="DataTables_Table_1"]/tbody/tr[10]')), 10000, 'Could not locate in time');

//driver.sleep(10000);


driver.findElement(By.xpath('//*[@id="DataTables_Table_1"]/tbody/tr[10]'))
.then(span => span.getText())
.then(text => xfunc(text))

//console.log(texto.getText());




function xfunc(FichaAtual) {
    
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'brcryptomoedas@gmail.com',
            pass: 'Y0Ei7yhgMI'
        }
    });

    var mailOptions = {
        from: 'brcryptomoedas@gmail.com',
        to: 'jorgedantas2@gmail.com',
        subject: 'Sending Email using Node.js',
        text: FichaAtual
      };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      })
}

driver.quit();


