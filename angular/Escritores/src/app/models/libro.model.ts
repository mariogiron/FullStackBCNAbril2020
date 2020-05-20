export class Libro {
    id: number;
    titulo: string;
    publicado: number;
    imagen: string;
    escritor: number;

    constructor(pId: number, pTitulo: string, pPublicado: number, pImagen: string, pEscritor: number) {
        this.id = pId;
        this.titulo = pTitulo;
        this.publicado = pPublicado;
        this.imagen = pImagen;
        this.escritor = pEscritor;
    }
}