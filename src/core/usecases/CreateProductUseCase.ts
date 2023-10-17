import { Product } from "../entities/Product";

export class CreateProductUseCase {
  constructor(
    private id: string,
    private name: string,
    private category: string,
    private barcode: number,
    private price: number,
    private info: object,      
  ) {}

  execute(): Product { 
    return new Product({
      id: this.id,
      name: this.name,
      category: this.category,
      barcode: this.barcode,
      price: this.price,
      info: this.info,
    });
  }
}