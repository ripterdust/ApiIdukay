import { Router } from 'express'
import { Route } from '../common/interfaces/route.interface'
import { deleteDogs, findDogs, indexDogs, storeDogs } from '../controllers/dogs.controller'

const router = Router()

router.get('/', indexDogs).get('/:id', findDogs)

router.post('/', storeDogs)

router.delete('/:id', deleteDogs)

export const dogsRoutes: Route = {
    endpoint: '/dogs',
    router,
}
