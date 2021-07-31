const express = require('express')
const app = express()
const { products } = require('./name')

app.get('/', (req, res) => {
    res.send('<h1> Home </h1> <a href="/api/products">products</a>') 
})

app.get('/api/products/:productID', (req, res) => {
    // console.log(req)
    // console.log(req.params)

    const {productsID} = req.params;

    const singleProduct = products.find(
        (product) => product.id === Number(productsID)
    )
    res.json(singleProduct )
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
});