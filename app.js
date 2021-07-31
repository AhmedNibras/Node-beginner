const express = require('express')
const app = express()
const { products } = require('./name')

app.get('/', (req, res) => {
    res.send('<h1> Home </h1> <a href="/api/products">products</a>') 
})

app.get('/api/products', (req, res) => {
    const singleProduct = products.find((product) => product.id === 1)
    
    res.json(newProducts)
}

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
});