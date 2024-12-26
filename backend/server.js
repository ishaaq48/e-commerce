import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
dotenv.config()
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js'
connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Api is running...')
})
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use(notFound)

app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})