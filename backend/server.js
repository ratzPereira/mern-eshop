const express = require('express')
const products = require('../backend/data/products')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Running')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.listen(PORT, () => {
  console.log('Server running in the port ' + PORT)
})
