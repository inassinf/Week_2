let {Persona} = require ("./person") 

let Nur = new Persona(1.60, 60);
// console.log("Nuestra persona es: " + Nur);

let Jose = new Persona(1.7, 80);
Jose.colorOjos ="azul";
Jose.yearOfBirth = 1955;
Jose.anioActual = 2023;
Jose.nacionalidad = "portuguesa"
Jose.hobbies= ["andar", "viajar", "comer", "correr"]

// console.log(Jose.imc);
// console.log("Su edad es" + edad() + "anios");
// Jose.printAll()

console.log("Su IMC es: " + Jose.imc()); 

Jose.printAll();
console.log("Tiene " + Jose.edad(2023) + " anios");