const app = require("./app");

const PORT = process.env.PORT || 3580

app.listen(PORT), () => {
    console.log(`Servidor escuchando en puertazo ${PORT}`);
}