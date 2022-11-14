import { Router } from 'express'
import { Route } from '../common/interfaces/route.interface'
import { indexCats } from '../controllers/cats.controller'

const router = Router()

router.get('/', indexCats)

export const catsRoutes: Route = {
    endpoint: '/cats',
    router,
}
