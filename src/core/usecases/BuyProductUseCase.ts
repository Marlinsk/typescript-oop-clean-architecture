import { Product } from '../entities/Product';
import { ShoppingCart } from '../entities/ShoppingCart';

export class BuyProductUseCase {
  constructor(private product: Product, private shoppingCart: ShoppingCart) {}

  execute(): void {
    this.shoppingCart.addItem(this.product);
  }
}
