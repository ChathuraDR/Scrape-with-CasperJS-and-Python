var casper = require('casper').create({
    clientScript: ["jquery-3.2.1.min.js"],
    verbose: true, //gives you some additional information..
    logLevel: 'debug'
});

var x = require('casper').selectXPath;

casper.userAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1');
phantom.cookiesEnabled = true;

var fs = require('fs');
var cookies = JSON.stringify(phantom.cookies);
fs.write("cookies.txt",cookies,644);

casper.start('http://localhost/arcctf/login.php',function(){
    this.echo(this.getTitle());
});
/* assigning the window size.
casper.start('http://localhost/arcctf/index.php').viewport(1200, 1000);
*/

casper.waitForSelector(x('//*[@id="loginForm"]'), function(){
    this.thenEvaluate(function(){
        $('#email').val("xxxxxxxxx@xxx.com");
        $('#passwd').val("xxxxxxxxxxx");
    });
});

/*
casper.waitForSelector(x('//*[@id="loginForm"]/button'),function(){
    casper.click(x('//*[@id="loginForm"]/button'));
});
/*if particular path is large, we can use another method for such situations,in here we looking for text filed of that button
and try to click it by it's class.if there's more than one button with same text, you should be careful.
casper.waitForSelector(x('//span[contains(text(), "Sign In")]'),function(){
    casper.click(x('//span[contains(text(), "Sign In")]'));
});
*/

casper.then(function() {
    casper.click(x('//*[@id="loginForm"]/button'));
});

casper.wait(3000,function(){
    casper.capture('test.png');
});

/*
casper.thenOpen('http://localhost/arcctf/blog/index.php', function() {
    this.echo('Blog Page: ' + this.getTitle());
});
/* right click on the link and select 'Copy Xpath'
casper.waitForSelector(x('XpathFortheLink or a button'), function() { here this will check if the page is exist or not.
    casper.click(x('XpathFortheLink or a button'));
});

   take a snapshot of the web content cunrrently in
casper.wait(3000,function(){
    casper.capture('test.png');
});
*/

casper.thenOpen('http://localhost/arcctf/index', function() {
  this.echo('Get Blog Page: ' + this.getTitle());
});
casper.run();