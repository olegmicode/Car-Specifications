import { getRepository } from 'typeorm'
import { NextFunction, Request, Response } from 'express'
import { Car } from '../entity/Car.entity'

export class CarController {
  private carRepository = getRepository(Car)

  async all(request: Request, response: Response, next: NextFunction) {
    return this.carRepository.find()
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.carRepository.findOne(request.params.id)
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.carRepository.save(request.body)
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const userToRemove = await this.carRepository.findOneBy({
      id: request.params.id
    })
    await this.carRepository.remove(userToRemove)
  }
}
