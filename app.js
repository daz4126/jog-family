const express = require("express")

const app = express()
const port = 3000

app.use(express.static(__dirname))
app.use(express.json())

app.get("/", (req, res) =>
  res.sendFile('/index.html')
)

const jog = ['OG','FM','OG Draggy','FM Draggy']

app.get('/jog', (req, res) =>
  res.json(jog)
)

app.post('/jog', (req, res) => {
    jog = [...jog,`JOG baby ${things.length - 3}`]
    resp.json(jog)
})
  
app.listen(port, _ => console.log(`Example app listening on port ${port}!`))