const express = require('express');
const app = express();

app.use(express.json());
app.set('port', process.env.port || 8000)

const jsonplaceholderRouter = require('/routes/jsonplaceholder')

app.use('/jsonplaceholder', jsonplaceholderRouter);
app.get('/', (req, res) =>{
  res.send('Welcome')
})

app.listen(app.get('port'), () => console.log(`listen on port ${app.get('port')}`))


module.exports = app;
