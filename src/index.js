module.exports = function check(str, bracketsConfig) { [...str].forEach(() => bracketsConfig.map(elem => elem.join('')).forEach(elem => str = str.replaceAll(elem, ''))); 
return str === '';}
