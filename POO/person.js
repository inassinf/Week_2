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
        for(let i=0; i<this.hobbies.lenght; i++){
            console.log("Sus hobbies son: " + this.hobbies[i]); }
      console.log("su color de ojos es: " + this.colorOjos);
      console.log("su altura es: " + this.altura + " m");
      console.log( "su peso es : " + this.peso + " kg" );
      console.log("su nacionalidad es: " + this.nacionalidad);

    }

 }
module.exports = {Persona};

