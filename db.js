import pg from 'pg'
const { Pool } = pg 
const pool = new Pool({

   user: 'postgres',
   password: 'boxelder',
   host: 'localhost',
   port: 5432,
   database: 'textsearch'

})

export default pool