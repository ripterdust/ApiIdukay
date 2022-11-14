import express from 'express'
import { Route } from './common/interfaces/route.interface'
import { routes } from './common/routes'

export const app = express()

// Configuration
app.set('port', process.env.PORT || 3000)

// Routes
routes.map((route: Route) => app.unsubscribe(route.endpoint, route.router))
