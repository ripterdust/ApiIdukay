import express, { Request, Response } from 'express'
import { RouteResponse } from './common/interfaces/response.interface'
import { Route } from './common/interfaces/route.interface'
import { routes } from './common/routes'

export const app = express()

// Configuration
app.set('port', process.env.PORT || 3000)

// Routes
routes.map((route: Route) => app.use(route.endpoint, route.router))

app.use('*', (req: Request, res: Response) => {
    const response: RouteResponse = {
        statuscode: 404,
        message: 'Page not found',
    }

    res.status(response.statuscode).json(response)
})
