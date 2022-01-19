let nombres = [6, 42, 4, 81, 56, 33];


// -------------------------- Map ---------------------------


console.log(nombres);
// let nombresMultiplies = nombres.map(number => number * 2);
// let nombresAdditionnes = nombres.map(number => number + 2);
// console.log(nombresAdditionnes);
// console.log(nombresMultiplies);
// nombres.map(() => console.log('Hey !'));


let team = [
    {
        name : 'Lydia',
        age : 20,
    },
    {
        name : 'Peter',
        age : 23,
    },
    {
        name : 'Robert',
        age : 18,
    },
    {
        name : 'Angele',
        age : 42,
    }
]
// team.map(teamMember => teamMember.age += 10);
// console.table(team);

// ---------------------- Sort ------------------------


const order = team.sort((a,b) => a.age > b.age ? 1 : -1);
console.table(order);

// ------------------------- Filter -------------------------------

let nombresFiltres = nombres.filter(number => number > 18 && number < 50 );
let nombresFiltres = nombres.filter(number => number % 2 !== 0);
console.log(nombresFiltres);


// -------------------------------- Reduce ----------------------------

let valeurReduce = nombres.reduce((acc, item) => acc + item);
console.log(valeurReduce);