import { Router } from 'express'
import { Route } from '../common/interfaces/route.interface'

const router = Router()

export const catsRoutes: Route = {
    endpoint: '/cats',
    router,
}
