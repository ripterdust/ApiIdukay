import express, { Request, Response } from 'express'
import { RouteResponse } from './common/interfaces/response.interface'
import { Route } from './common/interfaces/route.interface'
import { routes } from './common/routes'
import mongoose from 'mongoose'
import { mongoDbConfig, mongoDBURI } from './common/database/database'
import morgan from 'morgan'
import { environment } from './common/config/environment.config'

// Initilizations
export const app = express()

// Configuration
app.set('port', environment.PORT)

mongoose
    .connect(mongoDBURI, mongoDbConfig)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err.message))

// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))

// Routes
routes.map((route: Route) => app.use(route.endpoint, route.router))

app.use('*', (req: Request, res: Response) => {
    const response: RouteResponse = {
        statuscode: 404,
        message: 'Page not found',
    }

    res.status(response.statuscode).json(response)
})
