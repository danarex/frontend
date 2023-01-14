export class Proyectos {
    id?:number;
    nombreE:string;
    descripcionE:string;
    imgE:string;
    fechaE:string;
    linkE:string;

    constructor(nombreE:string,descripcionE:string, imgE:string,fechaE:string,linkE:string) {
        this.nombreE=nombreE;
        this.descripcionE=descripcionE;
        this.imgE=imgE;
        this.fechaE=fechaE;
        this.linkE=linkE;
        
    }
}