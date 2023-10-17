import { Product } from "../entities/Product";

export class ListProductsUseCase {
  constructor(private products: Product[]) {}

  execute(): Product[] {
    return this.products;
  } 
}