const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json([
    {
        name: 'Nibras',
    },
    { 
        name: 'Ahmed'
    }])
})

app.listen(5000, (req, res) => {
    console.log('Server is listening on port 5000....')
});