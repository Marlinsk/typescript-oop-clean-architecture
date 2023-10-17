import { ShoppingCart } from "../entities/ShoppingCart";

export class RemoveProductFromCartUseCase {
  constructor(private shoppingCart: ShoppingCart) {}

  execute(barcode: number): void {
    this.shoppingCart.removeItem(barcode);
  }
}