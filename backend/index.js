const Generation = require ("./generation");

const generation = new Generation();

console.log("generation" , generation);

const mordor = generation.newDragon();

console.log("mordor", mordor);

setTimeout(()=>{
    const brunhyldyr = generation.newDragon();
    console.log("brunhyldyr",brunhyldyr);
},15000);
