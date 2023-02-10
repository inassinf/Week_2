class Persona{

    constructor(hight, weight){
        this.colorOjos
        this.altura = hight
        this.peso = weight
        this.nacionalidad
    }

    imc(){this.peso/(this.altura * this.altura) }



}

let Jose = new Persona(1.7, 80);
console.log(Jose.imc);