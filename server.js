const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')

const app = express()
app.use(bodyParser.json())
app.use('**/static',express.static(path.join(__dirname,'/build/static')))
app.use(morgan('tiny'))


app.get('/health', (request, response) => {
    response.status(200).send({
        status: 'ok'
    })
})

app.get('**/manifest.json', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build/manifest.json'))
})

app.get('**/', (req, res) => {
    res.sendFile(path.join(__dirname,'/build/index.html'))
})

app.listen(8080,'0.0.0.0',() => {
    console.log('listening on *:8080');
})