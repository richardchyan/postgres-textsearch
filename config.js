import pg from 'pg'
const { Pool } = pg 
import dotenv from 'dotenv'

dotenv.config()

const devConfig = {
      user: 'postgres',
      password: 'boxelder',
      host: 'localhost',
      port: 5432,
      database: 'textsearch'
}

const prodConfig = { connectionString: process.env.DATABASE_URL, ssl: {rejectUnauthorized: false} }

const pool = new Pool(process.env.NODE_ENV === 'production' ? prodConfig : devConfig)

export default pool