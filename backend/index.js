const express = require("express");
const Generation = require ("./generation");
const GenerationEngine = require("./generationengine.js");
const app = express();
const engine = new GenerationEngine;
const port = 3000;


engine.start();
app.get("/dragon/new",(req,res) => {
    res.json({ dragon: engine.generation.newDragon() })
});

app.listen(port, () => console.log(`listening on port ${port}`));






