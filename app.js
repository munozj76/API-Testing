const express = require('express');
const app = express();

app.use(express.json());
app.set('url', 'https://jsonplaceholder.typicode.com/')
// app.set('port', process.env.port || 8000)

const jsonplaceholderRouter = require('/routes/jsonplaceholder')

app.use('/jsonplaceholder', jsonplaceholderRouter);
app.get('/', (req, res) =>{
  res.send('Welcome')
})

//app.listen(app.get('port'), () => console.log(`listen on port ${app.get('port')}`))
app.listen(app.get('url'), () => console.log(`listen on url ${app.get('url')}`))

module.exports = app;
