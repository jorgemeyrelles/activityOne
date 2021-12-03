const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');
const bodyParser = require('body-parse');

const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

http.listen(PORT, () => console.log(`Funcionando na porta -> ${PORT}`));
