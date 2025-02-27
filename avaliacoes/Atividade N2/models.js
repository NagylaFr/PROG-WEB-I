const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
    descricao: String,
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comentarios: [{ 
        usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
        texto: String 
    }]
});

module.exports = mongoose.model('Book', BookSchema);
