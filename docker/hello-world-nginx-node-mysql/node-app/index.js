const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')


app.get('/', (req, res) => {
    get(res)
})

app.get('/:newName', (req, res) => {
    const newName = req.params.newName;

    if (newName !== "favicon.ico") {
        const connection = mysql.createConnection(config)
        const sql = `INSERT INTO people(name) values ('${newName}')`
        connection.query(sql, (err, x, e)=> {})
        connection.end()
    }

    get(res)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})

function get(res) {
    const connection = mysql.createConnection(config)
    connection.query('select name from people', (err, results, fields) => {
        
        let response = '<h1>Full Cycle Rocks!</h1><ul>'

        for(person of results) {
            response += '<li>'
            response += person.name
            response += '</li>'
        }

        response += '</ul>'
        res.send(response)
    })
    connection.end()
}