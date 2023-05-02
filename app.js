const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello Sudhir!');
});


// app.get('/hello' , (req,res) => {
//     res.send("This is hello file!")
// })
app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});