var {Persona} = require ("./person") 

var Nur = new Persona(1.60, 60);
Nur.colorOjos ="verde";
Nur.yearOfBirth = 2011;
Nur.nacionalidad = "espaniola"
Nur.hobbies= ["comer", "dormir", "jugar", "correr"]

var Fatima = new Persona(1.7, 80);
Fatima.colorOjos ="negro";
Fatima.yearOfBirth = 1950;
Fatima.nacionalidad = "marroqui"
Fatima.hobbies= ["limpiar", "andar", "leer", "correr"]

var Juana = new Persona(1.8, 90);
Juana.colorOjos ="marron";
Juana.yearOfBirth = 1970;
Juana.nacionalidad = "espaniola"
Juana.hobbies= ["correr", "leer", "andar", "viajar"]

var Jose = new Persona(1.7, 80);
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