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