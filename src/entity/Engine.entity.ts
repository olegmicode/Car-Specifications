import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Engine {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  engine_count: string

  @Column()
  engine_type: string
}
