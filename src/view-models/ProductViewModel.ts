import { Product } from "src/core/entities/Product";

export class ProductViewModel {
  static viewProduct(product: Product) {
    return {
      id: product.id,
      name: product.name,
      category: product.category,
      barcode: product.barcode,
      price: product.price,
      info: product.info
    }
  }
}