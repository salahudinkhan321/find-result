import express from 'express'
import { connectDb } from './db/index.js'
import dotenv from 'dotenv'
import studentRouter from './routes/student.route.js'
import cors from 'cors'

dotenv.config({ path: './.env' })

const app = express()
const port = process.env.PORT || 4000


app.use(express.json())
app.use('/api/student', studentRouter)
app.use(cors({
    origin: process.env.FRONTEND_URI
}))

connectDb()
    .then(
        app.listen(port, () => {
            console.log(`Running on ${port}`)
        })
    )
    .catch((error) => {
        console.log(error)
    })