import { environment } from '../config'

export const mongoDBURI: string = environment.DBURI

export const mongoDbConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: environment.DBUSER,
    pass: environment.DBPASS,
}
