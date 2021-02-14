const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World')
}); 

//Create a route `/balance` that gets the balance of the account
app.get('/balance', (req, res) => {
    res.send('this route gets the balance of the account')
}); 

app.get('/balance', (req, res) => {
    res.send('this route gets the balance of the account')

}); 

//Create a route `/withdraw` that withdraws money from the account. The withdraw amount will be in the body

app.get('/withdraw', (req, res) => {
    res.send('this route gets the withdraws amount from the account')

}); 

//Create a route `/deposit` that deposits money from the account. The deposit amount will be in the body

app.get('/deposit', (req, res) => {
    res.send('this route deposits money from the account')

}); 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

