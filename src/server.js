const express = require('express');

const server = express();

server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res) => {
  return res.json({ message: 'Servidor no ar!' })
})

server.listen(5000, () => {
  console.log('Servidor rodando em https://localhost:5000');
});