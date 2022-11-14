import { Router } from 'express'
import { Route } from '../common/interfaces/route.interface'
import { findDogs, indexDogs, storeDogs } from '../controllers/dogs.controller'

const router = Router()

router.get('/', indexDogs).get('/:id', findDogs)

router.post('/', storeDogs)

export const dogsRoutes: Route = {
    endpoint: '/dogs',
    router,
}
