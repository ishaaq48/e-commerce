import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js'
connectDB()
const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Api is running...')
})
app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})