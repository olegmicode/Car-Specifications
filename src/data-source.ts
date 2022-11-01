import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

export const config = new DataSource({
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
