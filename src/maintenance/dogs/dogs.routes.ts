import { Router } from 'express'
import { Route } from '../../common/interfaces/route.interface'
import { deleteDogs, findDogs, indexDogs, storeDogs, updateDog } from './dogs.controller'

const router = Router()

router.get('/', indexDogs).get('/:id', findDogs)

router.post('/', storeDogs)

router.delete('/:id', deleteDogs)

router.put('/:id', updateDog)

export const dogsRoutes: Route = {
    endpoint: '/dogs',
    router,
}
