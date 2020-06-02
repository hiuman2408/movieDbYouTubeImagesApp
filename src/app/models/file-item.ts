
export class FileItem{

    public archivo:File;
    public nombreArtchivo:string;
    public url:string;
    public estasubiendo:boolean;
    public progreso:number

    constructor(archivo:File){
        this.archivo = archivo;
        this.nombreArtchivo=archivo.name;
        this.estasubiendo=false;
        this.progreso=0;

    }
}