import express from "express";
import router from "./routes.js";

const app = express()
// app.use(express.json())

const PORT = 3000;

app.use('/public', express.static('public'))
app.use('/images', express.static('images'))

app.get('/', (req, res) => {
  res.send('Hello Express')
})



















// set ejs in view engine
// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   const userName = "sai surya"
//   res.render('index', { userName })
// })

// app.use('/welcome', (req, res, next) => {
//   console.log('A new request recevied' + Date.now())
//   next()
// })

// app.get('/error', (req, res) => {
//   throw new Error('this is an Error') 
// })

// app.use((err, req, res, next)=>{
//   console.error(err.message);
//   res.send('internal server Error')

// })

// app.get('/welcome', (req, res) => {
//   res.send('Welcome to express app');
// })

// app.post('/user', (req, res) => {
//   const { name, email } = req.body;
//   res.json({
//     message: `User ${name} with email ${email}`
//   })
// })

// app.put('/user/:id', (req, res) => {
//   const userId = req.params.id;
//   const { name, email } = req.body;
//   res.json({
//     message: `User ${userId} updated to ${name} with email ${email}`
//   })
// })

// app.delete('/user/:id', (req, res) => {
//   const userId = req.params.id
//   res.json({
//     message: `User ${userId} deleted successfully`
//   })
// })

app.use('/user', router)



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})