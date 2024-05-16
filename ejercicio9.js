//Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo. Utiliza este array para probar tu función.


const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1960 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(list) {
let bornYear = 2024;
let oldest_xMen = [];
for(let i = 0; i < xMen.length; i++) {
  if(xMen[i].year <= bornYear) {
    bornYear = xMen[i].year;
    oldest_xMen = xMen[i];
  }
}
return `El xMen más antiguo es: ${oldest_xMen.name} del año ${oldest_xMen.year}.`;
}

let result = findOldestXMen(xMen);
console.log(result);
