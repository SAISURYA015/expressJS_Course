import express from "express";
import mongoose from "mongoose";

const app = express()
const PORT = 3000;

const MONGODB_URI = 'connection string from mongodb'

mongoose.connect(MONGODB_URI).then(() => {
  console.log('MongoDB connected')
})

app.get('/', (req, res) => {  
  res.send('Hello Express')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})












// import router from "./routes.js";
// import multer from "multer";
// import { storage } from "./config/multer.js";



// const upload = multer({
//   storage,
//   limits: {
//     fileSize: 1024000
//   }
// });
// app.use(express.json())



// app.use(express.urlencoded({ extended: true }))
// app.use(upload.single('image'))




// app.post('/form', (req, res) => {
//   console.log(req.body);
//   console.log(req.file);
//   res.send('Form Received')
// })

// app.use('/public', express.static('public'))
// app.use('/images', express.static('images'))

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

// app.use('/user', router)



