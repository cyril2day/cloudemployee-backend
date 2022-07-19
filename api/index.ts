import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import routes from '../routes/api'
import cors from 'cors'


/**
 * The application instance
 *
 */

const app = express()


/**
 * Connect to MongoDB. If connected, start
 * server instance.
 *
 */

const dbURI = 'mongodb+srv://cyril:cyriltest@cluster0.z0hpt.mongodb.net/cyriltest?retryWrites=true&w=majority'
mongoose.connect(dbURI)


/**
 * For middlewares & static files
 * 
 */

app.use(express.static('public'))
app.use(express.json())
app.use(cors({ origin: true, credentials: false }))
app.use(morgan('dev'))
app.use((request, response, next) => {
  response.locals.path = request.path
  next()
})

/**
 * Register routes
 */
app.use('/api/', routes)



export default app
