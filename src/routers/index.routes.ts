import { Request, Response, Router } from 'express'
import { RouteResponse } from '../common/interfaces/response.interface'
import { Route } from '../common/interfaces/route.interface'

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
