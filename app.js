const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ message: "API Funcionando" });
})

app.get("/clients", (req, res) => {
    res.status(200).json({ message: "Ok", clients: ["uno","dos"]  });
})

app.get("/not_found", (req, res) => {
    res.status(404).json({ message: "Error not found" });
})

app.get("/administradores", (req, res) => {
    res.status(200).json({ message: "Ok", administradores: [
        {
            "nombre": "Lisandro",
            "apellido" : "Lopez",
            "edad": "41"
        },
        {
            "nombre": "Maravilla",
            "apellido" : "Martinez",
            "edad": "32"
        },
        {
            "nombre": "Diego",
            "apellido" : "Milito",
            "edad": "45"
        },
        {
            "nombre": "Gustavo",
            "apellido" : "Costas",
            "edad": "65"
        },
        {
            "nombre": "Ezra",
            "apellido" : "Sued",
            "edad": "RIP"
        }
    ]  });
})


module.exports = app;