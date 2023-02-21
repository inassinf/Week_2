let {contacts} = require ("./contacts") 
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


let amigos = new contacts;
amigos.grupo = "Salidas";
amigos.ciudad ="Marbella";

amigos.personas = [Fatima, Nur]
// console.log(empresa.printPersons()); 
// console.log(amigos.printPersons()); 

console.log(amigos.printPersons()); 