import { Router } from 'express'
import { Route } from '../common/interfaces/route.interface'
import { indexDogs } from '../controllers/dogs.controller'

const router = Router()

router.get('/', indexDogs)

export const dogsRoutes: Route = {
    endpoint: '/dogs',
    router,
}
