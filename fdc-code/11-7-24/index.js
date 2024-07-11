const express = require('express')
const app = express()
const port = 3031;
// app.use(express.json())
var { push } = require('./childManager');
var { spawn } = require('child_process');
app.get(`/down`, async (req, res) => {
    push()
    res.json({
        name: 'down'
    })
})
app.get('/', async (req, res) => {
    res.json({
        name: 'hi'
    })
})
app.listen(port, ()=>{
    console.log(`🚀 Listening on ${port} 🚀`)
})
