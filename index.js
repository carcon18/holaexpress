const express = require ('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello, World from Express!')
})
/**
 * 
 * FUNCIONALIDAD
 * 
 */

//http://localhost:3000
app.listen(3000, () =>{
    console.log('listening on port 3000')
})