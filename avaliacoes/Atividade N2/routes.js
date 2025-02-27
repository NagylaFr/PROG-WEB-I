const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

router.post('/adicionar', async (req, res) => {
    const { titulo, autor, descricao, usuario } = req.body;
    
    const novoLivro = new Book({ titulo, autor, descricao, usuario });
    await novoLivro.save();

    res.json({ mensagem: "Livro adicionado com sucesso!" });
});

module.exports = router;
