const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const app = express();
const PORT = 3000;

// Carpeta donde se guardan los arcjhivos
const outputDir = path.join(__dirname, 'generated');

app.post('/generate', async (req, res) => {
    const numberOfFiles = 1000; 

    // por s generate no esta creada 
    await fs.mkdir(outputDir, { recursive: true });

    //promesa
    const tasks = [];

    for (let i = 0; i < numberOfFiles; i++) {
        const filePath = path.join(outputDir, `file_${i}.txt`);
        const content = `Este es el archivo número ${i}`;

        
        console.log(`Generando archivo: file_${i}.txt`);

        tasks.push(fs.writeFile(filePath, content));
    }

    try {
        
        await Promise.all(tasks);
        res.send(`${numberOfFiles} archivos generados exitosamente.`);
    } catch (error) {
        console.error('Error al generar archivos:', error);
        res.status(500).send('Error generando archivos.');
    }
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});