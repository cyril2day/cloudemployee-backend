import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'

/*
 * The application instance
 *
 */
const app = express()

/*
 * The application port
 *
 */
const port = process.env.PORT || 5000

/**
 * Connect to MongoDB. If connected, start
 * server instance.
 *
 */
const dbURI = 'mongodb+srv://cyril:cyriltest@cluster0.z0hpt.mongodb.net/cyriltest?retryWrites=true&w=majority'
mongoose.connect(dbURI)
  .then(() => {
    app.listen(port)
    console.log(`Application listening on port ${port}`)
  })
  .catch(err => console.log(err))

/*
 * For middlewares & static files
 * 
 */
app.use(express.static('public'))
app.use(express.json())
app.use(morgan('dev'))
app.use((request, response, next) => {
  response.locals.path = request.path
  next()
})

export default app
