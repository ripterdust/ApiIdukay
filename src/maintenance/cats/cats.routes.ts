import { Router } from 'express'
import { Route } from '../../common/interfaces/route.interface'
import { deleteCats, findCats, indexCats, searchCat, storeCats, updateCats } from './cats.controller'
const router = Router()

router.get('/', indexCats).get('/search', searchCat).get('/:id', findCats)

router.post('/', storeCats)

router.delete('/:id', deleteCats)

router.put('/:id', updateCats)

export const catsRoutes: Route = {
    endpoint: '/cats',
    router,
}
