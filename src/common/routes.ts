import { dogsRoutes } from '../maintenance/dogs/dogs.routes'
import { catsRoutes } from '../maintenance/cats/cats.routes'
import { Route } from './interfaces/route.interface'
import { Request, Response, Router } from 'express'
import { RouteResponse } from '../common/interfaces/response.interface'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    const response: RouteResponse = {
        statuscode: 200,
        message: 'Index page',
    }

    res.status(response.statuscode).json(response)
})

export const indexRoutes: Route = {
    endpoint: '/',
    router,
}

export const routes: Route[] = [indexRoutes, dogsRoutes, catsRoutes]
