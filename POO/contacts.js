var {Persona} = require ("./person") 

class contacts{
    constructor(){
        this.grupo 
        this.personas = []
        this.ciudad 
    }
    printPersons(){
        let resultado 
         for(let i=0; i<this.personaslenght; i++){
            let resultado = this.personas[i].printAll();
         }
       return resultado;
    }

}

module.exports = {contacts};