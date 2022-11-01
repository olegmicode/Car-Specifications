import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn
} from 'typeorm'
import { Color } from './Color.entity'
import { Engine } from './Engine.entity'

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  brand: string

  @OneToOne(() => Engine)
  @JoinColumn()
  engine: Engine

  @OneToOne(() => Color)
  @JoinColumn()
  color: Color
}
