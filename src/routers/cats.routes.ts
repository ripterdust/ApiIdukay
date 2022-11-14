import { Router } from 'express'
import { Route } from '../common/interfaces/route.interface'
import { findCats, indexCats, storeCats } from '../controllers/cats.controller'

const router = Router()

router.get('/', indexCats).get('/:id', findCats)

router.post('/', storeCats)

export const catsRoutes: Route = {
    endpoint: '/cats',
    router,
}
