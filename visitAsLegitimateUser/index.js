var webPage = require('webpage');
var page = webPage.create();

phantom.addCookie({ 
    domain: 'localhost',
    expires: 'Sat Oct 11 2014 21:44:33 GMT+0200 (CEST)',
    expiry: 1476128618,
    httponly: false,
    name: 'cookieName',
    path: '/',
    secure: false,
    value: 'cookieValue'
  });

page.open('http://localhost/arcctf/blog/test.php', function (status) {
  var cookies = page.cookies;
  
  console.log('Listing cookies:');
  for(var i in cookies) {
    console.log(cookies[i].name + '=' + cookies[i].value);
  }
  
  phantom.exit();
});