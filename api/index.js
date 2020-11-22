const server = require('./src/app.js')
require('dotenv').config()

server.listen(process.env.PORT, () => {
    console.log(`Listening to port: ${process.env.PORT}` )
})