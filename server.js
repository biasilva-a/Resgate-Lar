const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Serve arquivos estáticos da raiz do repositório
app.use(express.static(path.join(__dirname)));

// Endpoint para registrar/acionar abertura do chat
app.post('/api/open-chat', (req, res) => {
  const info = {
    time: new Date().toISOString(),
    path: req.path,
    body: req.body || null
  };
  console.log('[api/open-chat] voluntario click:', info);
  // Aqui você poderia armazenar no banco, enviar para webhook, etc.
  res.json({ ok: true, received: info });
});

app.listen(port, () => {
  console.log(`Servidor iniciado: http://localhost:${port}`);
});
