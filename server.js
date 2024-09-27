// Importar el módulo express
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el nombre del archivo actual y la carpeta
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Crear una instancia de Express
const app = express();

// Definir el puerto número del local 
const PORT = 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');

 app = express();

// Aumentar el límite a 100 MB
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
