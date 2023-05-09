const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => 'El servidor esta corriendo en el puerto '+ port);


app.get('/', function(req, res){
    const rutaCompleta = path.join(__dirname, './views/home.html')
    res.sendFile(rutaCompleta);
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
});
