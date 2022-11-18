import { app } from './app'

console.log('Pruba de git')
// Listening
app.listen(app.get('port'), () => console.log(`App listen on port ${app.get('port')}`))
