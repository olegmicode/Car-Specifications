import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

console.log(
  '[PROCESS_ENV]',
  process.env.MYSQL_HOST,
  process.env.MYSQL_PORT,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  process.env.MYSQL_DB
)
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true,
  logging: false,
  entities: [__dirname + '../**/*.entity{.ts}'],
  migrations: ['src/migrations/*.ts'],
  subscribers: []
})
