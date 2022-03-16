import cors from 'cors'
import express from 'express'
import pool from './db.js'

const app = express()
app.use(cors())

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
   res.send('database live')
} )

//routes
app.get('/people', async(req, res) => {

   try {
      const { name } = req.query 

      const response = await pool.query(
         "SELECT * FROM people WHERE first_name || ' ' || last_name ILIKE $1 ORDER BY last_name asc", [`%${name}%`]
      )
      res.json(response.rows)
   } catch (error) {
      console.log(error.message)
   }
})

app.listen(PORT, () => {

   console.log(`app is now running on port ${PORT}`)

})