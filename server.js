var express = require('express');
var app = express();

//zmodyfikuj funkcję middleware w taki sposób, aby wykonała się ona tylko dla zapytania /store - niech wyświetla komunikat
// Jestem pośrednikiem przy żądaniu do /store
app.use('/store', function (req, res, next) {
    console.log('Jestem pośrednikiem przy żądaniu do /store.')
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});

//do kodu endpointa GET/store, 
//który w odpowiedzi wyświetli To jest sklep
app.get('/store', function (req, res) {
    res.send('To jest sklep!')
});

app.listen(3000);

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});




