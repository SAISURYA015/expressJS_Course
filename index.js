import express from "express";

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello Express');
})

app.get('/user/:username', (req, res) => {
  const username = req.params.username;
  res.send(`Welcome ${username}`)
})

app.get('/search', (req, res)=>{
  const keyword = req.query.keyword;
  res.send(`Searching	for ${keyword}`)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})