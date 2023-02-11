 class Persona{

    constructor(hight, weight){
        this.colorOjos
        this.altura = hight
        this.peso = weight
        this.nacionalidad
        this.anioActual
        this.yearOfBirth
    }

    imc(){this.peso/(this.altura * this.altura) }

    edad() {(anioActual - Jose.yearOfBirth) }

    printAll(){console.log(Persona);}

    printAll(){
        for(let i=0; i<this.hobbies.lenght; i++){
            console.log(this.hobbies[i]);
        }
    }



}

let Jose = new Persona(1.7, 80);
Jose.yearOfBirth = 1955;
Jose.anioActual = 2023;
Jose.hobbies= ["andar", "viajar", "comer", "correr"]
console.log(Jose.imc);
console.log("Su edad es" + edad() + "anios");
Jose.printAll()
 export {Persona};

