const Generation = require ("./generation");

const GenerationEngine = require("./generationengine.js");
const engine = new GenerationEngine;


engine.start();

setTimeout(()=>{
    engine.stop();
},20000);



