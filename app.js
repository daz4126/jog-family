const express = require("express")

const app = express()
const port = 3000

app.use(express.static(__dirname))
app.use(express.json())

app.get("/", (req, res) =>
  res.sendFile('/index.html')
)

let things = ['OG','FM','JOG','OG Draggy','FM Draggy']

app.get('/things', (req, resp) =>
  resp.json(things)
)

app.post('/things', (req, resp) => {
    things = [...things,`JOG baby ${things.length - 4}`]
    resp.json(things)
})
  
app.listen(port, _ => console.log(`Example app listening on port ${port}!`))