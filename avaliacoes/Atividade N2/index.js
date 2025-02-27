require("dotenv").config(); // Carregar variáveis de ambiente do .env
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); // Habilita JSON no Express

// Conectar ao MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB conectado!"))
.catch(err => console.error("Erro ao conectar ao MongoDB:", err));

app.use("/api", require("./server")); // Importa as rotas

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
