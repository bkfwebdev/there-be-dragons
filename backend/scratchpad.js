get randomTraits () {
    const traits = [];
    TRAITS.array.forEach(TRAITS => {
        const traitType = TRAIT.type;
        const traitValues = TRAIT.values;
        const traitValue = traitValues[Math.floor(Math.random() * traitValues.length)];
        )}
    }

     // index.js (old content)

    const Dragon = require ("./dragon.js");
const bahamut = new Dragon({
    birthdate:new Date(),
    nickname:"b.dog"});
const shenlong = new Dragon({
    birthdate:new Date(),
    nickname:"Shen Rock"});

const tiamat = new Dragon();

setTimeout(()=>{
     const puff = new Dragon();
    console.log("puff",puff);
},3000 );

console.log("bahamut",bahamut);
console.log("shenlong",shenlong);
console.log("tiamat",tiamat);

// generation test

const generation = new Generation();

console.log("generation" , generation);

const mordor = generation.newDragon();

console.log("mordor", mordor);

setTimeout(()=>{
    const brunhyldyr = generation.newDragon();
    console.log("brunhyldyr",brunhyldyr);
},15000);




    