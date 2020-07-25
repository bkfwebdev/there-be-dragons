const Dragon = require ("./dragon.js");
const bahamut = new Dragon({
    birthdate:new Date(),
    nickname:"b.dog"});
const shenlong = new Dragon({
    birthdate:new Date(),
    nickname:"Shen Rock"});

console.log("bahamut",bahamut);
console.log("shenlong",shenlong);
