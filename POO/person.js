 class Persona{

    constructor(hight, weight){
        this.colorOjos
        this.altura = hight
        this.peso = weight
        this.nacionalidad
        this.yearOfBirth
    }

    imc(){return Math.floor(this.peso/(this.altura * this.altura)) }

    edad(anioActual) {return (anioActual - this.yearOfBirth) }


    printAll(){
        //crear una variable concatenada, y despues return con la variable
        let datos
        datos = [ this.colorOjos + this.altura + this.peso + this.nacionalidad]
        return datos;
    }
 }
module.exports = {Persona};

