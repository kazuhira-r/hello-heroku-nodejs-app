const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello Node.js App!!'));
app.get('/config/var', (req, res) => res.send(process.env.message));
app.get('/config/sensitive', (req, res) => res.send(process.env.sensitive_message));

app.listen(port, () => console.log(`[${new Date()}] Server startup, listen port = ${port}`));
