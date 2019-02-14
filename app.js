var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.redirect('/portfolio');
});

app.get('/portfolio', (req, res) => {
	res.render('portfolio');
});

app.listen(process.env.PORT || 3000);
