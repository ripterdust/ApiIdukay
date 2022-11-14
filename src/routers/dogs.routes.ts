import { Router } from 'express'
import { Route } from '../common/interfaces/route.interface'

const router = Router()

export const dogsRoutes: Route = {
    endpoint: '/dogs',
    router,
}
