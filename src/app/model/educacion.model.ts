export class Educacion {
    id?:number;
    nombreE:string;
    tituloE:string;
    inicioE:string;
    finE:string;
    imgE:string;

    constructor(nombreE:string,tituloE:string, imgE:string,inicioE:string,finE:string) {
        this.nombreE=nombreE;
        this.tituloE=tituloE;
        this.imgE=imgE;
        this.inicioE=inicioE;
        this.finE=finE;
        
    }
}