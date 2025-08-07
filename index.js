const express = require('express');
const app = express();
const PORT = process.env.PORT;

//endpoint de respuesta
app.get('/', (_req, res)=>{
    res.send('Integracion')
});

app.listen(PORT,() => {
    console.log(`Servidor en puerto ${PORT}`);
});