/*
    Immutable vs Mutable.
    Array objects destructuring, import and export.
    Map, filter, Arrow functions(implicit return), spread operator.
*/

let array1 = [1, 2, 3, 4, 5, 6];
// console.log("Array1:", array1);

// We can copy the array using spread operator, without changing the real array state.
let copyArray1 = [...array1];
// console.log("Copied Array1:", copyArray1);

// creating dynamic array.
const arr = [22, function () { }, 11];

// destructured all array elements.
const [first, second, third] = arr;

// console.log(first);
// console.log(second);
// console.log(third);

// what if i need 0th and 2nd element only.
const [one, , two] = arr;

// console.log(one);
// console.log(two);

// Creating object.
const youtuber = {
    firstName: "I Show",
    lastName: "Speed",
    age: 21,
    socials: {
        youtubeHandle: "ishowspeed",
        instagramHandle: "speed",
        xHandle: "ispeed"
    }
};

// Destructuring object.
let { youtubeHandle } = youtuber.socials;
// console.log({ youtubeHandle });

// import and export are used to connect the components.
// In react we create components and the each component we export it to use in the main file.

// Arrow Function(implicit returns).

// regular function.
function sum() {

}

// Arrow function without parameter.
const func1 = () => {
    console.log('Function 1.');
}
func1();

// Arrow function with one parameter.
const func2 = name => {
    console.log("Function 2 with one name parameter:", name);
}
func2("Demascus");

// Arrow function with more than one parameter.
const func3 = (driver1, driver2, teamName) => {
    console.log(`Function 3 with more than one parameter: ${driver1} and ${driver2} race for ${teamName}.`);
}
func3("Louis Hamilton", "Russell", "Mercedes");

// Arrow function with implicit return.
const func4 = () => India;

// console.log(`${func4} is the T20 World Cup Champions.`);

// If we place "{}" after arrows, then the function is no more returning implicitly.
const func5 = () => {
    return "India";
}
// console.log(`${func5()} is the T20 World Cup Champions.`);

// CONFUSION: Returning object implicitly.
const func6 = () => ({ name: "Virat Kohli", Profession: "Indian Cricketer" })

// console.log(`Function 6: He is ${func6().name} and he is an ${func6().Profession}.`);

// Map, Filter methods: most commonly used array methods in JS. used to create new arrays based on the original array's
// contents, but each servers different purpose.

// creating an array using map method.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubled = nums.map(num => num * 2);

// console.log("Doubled elements:", doubled);

// creating an array using filter method.
const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = nums.filter(num => num % 2 === 0);

console.log("Even elements in the array:", even);

const superHeros = [
    { name: "Captain America", universe: "Marvel" },
    { name: "Superman", universe: "Justice League" },
    { name: "Ironman", universe: "Marvel" },
    { name: "Wonder Women", universe: "Justice League" },
    { name: "Black Widow", universe: "Marvel" },
    { name: "Batman", universe: "Justice League" }
]

const marvelSuperHero = superHeros.filter(hero => hero.universe === "Marvel");
console.log("Marvel Superheroes:", marvelSuperHero);
const justiceLeagueSuperHero = superHeros.filter(hero => hero.universe === "Justice League");
console.log("Justice League Superheroes:", justiceLeagueSuperHero);