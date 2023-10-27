const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("views"));

app.listen(3000);

app.get('/', (req,res) => {
    res.render('index');
})

app.get('/makati', (req,res) => {
    res.render('makati');
})

app.get('/belair', (req,res) => {
    res.render('belair');
})

app.get('/urdaneta', (req,res) => {
    res.render('urdaneta');
})
app.get('/sanisidro', (req,res) => {
    res.render('sanisidro');
})

app.get('/forbespark', (req,res) => {
    res.render('forbespark');
})
