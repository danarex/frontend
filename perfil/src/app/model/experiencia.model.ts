export class Experiencia {
    id?:number;
    nombreE:string;
    puestoE:string;
    inicioE:string;
    finE:string;
    imgE:string;

    constructor(nombreE:string,puestoE:string, imgE:string,inicioE:string,finE:string) {
        this.nombreE=nombreE;
        this.puestoE=puestoE;
        this.imgE=imgE;
        this.inicioE=inicioE;
        this.finE=finE;
         
        
    }
}