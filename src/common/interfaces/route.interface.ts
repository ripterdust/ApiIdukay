import { Router } from 'express'

export interface Route {
    endpoint: string
    router: Router
}
