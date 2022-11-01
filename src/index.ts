import express, { Request, Response } from 'express'
import * as bodyParser from 'body-parser'
import { config } from './data-source'
import { routes } from './routes'
import { User } from './entity/User.entity'
;(async () => {
  try {
    await config.initialize()
    // create express app
    const app = express()
    app.use(bodyParser.json())

    // register express routes from defined application routes
    routes.forEach((route) => {
      ;(app as any)[route.method](
        route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          )
          if (result instanceof Promise) {
            result.then((r) =>
              r !== null && r !== undefined ? r.send(r) : undefined
            )
          } else if (result !== null && result !== undefined) {
            res.json(result)
          }
        }
      )
    })

    // setup express app here
    // ...

    // start express server
    app.listen(3000)

    // insert new users for test
    await config.manager.save(
      config.manager.create(User, {
        firstName: 'Timber',
        lastName: 'Saw',
        age: 27
      })
    )

    await config.manager.save(
      config.manager.create(User, {
        firstName: 'Phantom',
        lastName: 'Assassin',
        age: 24
      })
    )

    console.log(
      'Express server has started on port 3000. Open http://localhost:3000/users to see results'
    )
  } catch (error) {
    console.log(error)
  }
})()
