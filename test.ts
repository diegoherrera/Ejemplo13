
class Persona {
    nombre:string;
    apellido:string; 
    edad: number;

    constructor(pnombre:string, papellido:string, pedad: number) {
        this.nombre = pnombre;
        this.apellido = papellido;
        this.edad = pedad;
    }
    metodoPadre():string {
        return "Nombre: " + this.nombre + " Apellido: " + this.apellido;
    }
}

class PersonaEducada extends Persona {
    altura: number;
    constructor(pnombre:string, papellido:string, pedad: number, paltura: number) {
       super(pnombre,papellido, pedad);
       this.altura = paltura;
    }
}

//persona para definir el objeto 1
let objetoPersonaEducada = new PersonaEducada("DIEGO", "HERRERA", 18, 1.80);
console.log(JSON.stringify(objetoPersonaEducada));
console.log(objetoPersonaEducada.metodoPadre());