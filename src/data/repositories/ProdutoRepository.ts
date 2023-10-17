import { Product } from "../../core/entities/Product";

export class ProductRepository {
  private products: Product[] = [];

  public create(produto: Product): void {
    this.products.push(produto)
  }

  public listAll(): Product[] {
    return this.products;
  }

  public findByBarcode(barcode: number): Product | null {
    const product = this.products.find((product) => product.barcode === barcode)

    if (!product) {
      return null
    }

    return product;
  }
}