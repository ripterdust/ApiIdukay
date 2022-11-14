import { Router } from 'express'
import { Route } from '../common/interfaces/route.interface'
import { index } from '../controllers/dogs.controller'

const router = Router()

router.get('/', index)

export const dogsRoutes: Route = {
    endpoint: '/dogs',
    router,
}
