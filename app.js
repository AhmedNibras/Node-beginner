const express = require('express')
const app = express()
const { products } = require('./datas')

app.get('/', (req, res) => {
    res.send('<h1> Home Page</h1> <a href = "/api/products">products</a>')
})
app.get('/api/products', (req, res) => { 

    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return {id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productsID', (req, res) => {
    // console.log(req)
    // console.log(req.params)

    const {productsID} = req.params;

     const singleProduct = products.find(
        (product) => product.id === Number(productsID)
    )

    if(!singleProduct)
    { 
        return res.status(404).send('Product doesnot exist')
    }
    
    return res.json(singleProduct )
})

app.get('/api/products/:productsID/reviews/:reviewID', (req, res) =>{
    console.log(req.params)
    res.send('Hello World')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
});