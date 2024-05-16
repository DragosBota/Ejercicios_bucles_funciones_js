//Desarrolla una función que reciba un país por parámetro y devuelva su capital.
//Utiliza un objeto para almacenar los países y sus capitales.
//La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};


function getCapital(country) {
 for (const key in capitals) {
  //key es un array con todos los paises
  //capitals[key] es un array con todas las capitales
    if (key === country) {
      return capitals[key];
    }
  }
  return `Capital not found for ${country}. Please insert other country.`;
}

let result = getCapital('Austria');
console.log(result);