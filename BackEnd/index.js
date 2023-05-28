
const connectDB= require('./db');

connectDB();    

//const exp = express()
const app = require('express')();
const port = 3000
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
// app.get('/', (req, res) => {
//   res.send('Hello Reza!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})