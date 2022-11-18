import { app } from './app'

// Listening
app.listen(app.get('port'), () => console.log(`App listen on port ${app.get('port')}`))
