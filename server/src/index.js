import express from 'express'
import { connectDb } from './db/index.js'
import dotenv from 'dotenv'
import studentRouter from './routes/student.route.js'

dotenv.config({ path: './.env' })
const app = express()
const port = process.env.PORT || 4000


app.use(express.json())
app.use('/api/student', studentRouter)


connectDb()
    .then(
        app.listen(port, () => {
            console.log(`Running on ${port}`)
        })
    )
    .catch((error) => {
        console.log(error)
    })