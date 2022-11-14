import { catsRoutes } from '../routers/cats.routes'
import { dogsRoutes } from '../routers/dogs.routes'
import { indexRoutes } from '../routers/index.routes'
import { Route } from './interfaces/route.interface'

export const routes: Route[] = [indexRoutes, dogsRoutes, catsRoutes]
