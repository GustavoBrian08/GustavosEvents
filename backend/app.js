const express = require('express');
const cors = require('cors');
const db_connection = require('./db/db_connection')
const RoutesEvent = require('./routes/eventRouter');
const RoutesUser = require('./routes/userRouter');

const app = express();

app.use(express.json());
app.use(cors());

db_connection();
RoutesEvent(app);
RoutesUser(app);

const port = 3000;
app.listen(port, () => console.log(`\nServidor Iniciado: - http://localhost:${port}\n`));
