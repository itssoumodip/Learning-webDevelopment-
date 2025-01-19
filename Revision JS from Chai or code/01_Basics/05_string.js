const name = 'soumodip';
const repoCount = 50;

console.log(name + repoCount + ' value');

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('PUBG-X-Soumodip-DAS');
console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toLocaleLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('P'));

const newStr = gameName.substring(0,2);
console.log(newStr);

const anotherStr = gameName.slice(0, 2);
console.log(anotherStr);

const newStringOne = '    soumodip       ';
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://soumodip---.com";
console.log(url.replace('---', 'Das'));
console.log(url.includes('soumo'));
console.log(url.includes('das'));



console.log(gameName.split('-'));