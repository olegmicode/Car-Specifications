import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

import { Engine } from './Engine.entity'

@Entity()
export class Color {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  body_color: string

  @Column()
  paint_type: string
}
