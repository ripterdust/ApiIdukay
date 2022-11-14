import { Router } from 'express'
import { Route } from '../../common/interfaces/route.interface'
import { deleteCats, findCats, indexCats, storeCats } from './cats.controller'
const router = Router()

router.get('/', indexCats).get('/:id', findCats)

router.post('/', storeCats)

router.delete('/:id', deleteCats)
export const catsRoutes: Route = {
    endpoint: '/cats',
    router,
}
