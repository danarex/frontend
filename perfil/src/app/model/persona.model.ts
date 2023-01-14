export class Persona {
    id?:number;
    nombre:string;
    apellido:string;
    img:string;
    email:string;
    sobreMi:string;
    ubicacion:string;

    constructor(nombre:string,apellido:string, img:string,email:string,sobreMi:string,ubicacion:string) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.img=img;
        this.email=email;
        this.sobreMi=sobreMi;
        this.ubicacion=ubicacion;
        
    }
}