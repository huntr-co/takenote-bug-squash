import initializeServer from './initializeServer'
import router from './router'

const app = initializeServer(router)

app.listen(5001, () => console.log(`Listening on port ${5001}`)) // eslint-disable-line
