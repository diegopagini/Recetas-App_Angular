export class Receta {
  public receta: File;
  public id: any;
  public titulo: string;
  public ingredientes: string;
  public preparacion: string;
  public imagen: string;
  public url: string;
  public progreso: number;

  constructor(receta: File) {
    this.receta = receta;
    this.titulo = receta.name;
  }
}
