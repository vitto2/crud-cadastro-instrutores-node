const express = require("express"); // importo express
const app = express(); // crio uma instância do express
const routes = require("./routes/routes"); // importo arquivo de rotas

app.use(express.json()); //Especifica que o express só aceita arquivos do tipo json
app.use(routes); // informa o uso do arquivo rotas

app.listen(8000); // escuta porta 8000
