import express from 'express'
import products from './data.js'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'

connectDB()
const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Api is running...')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})