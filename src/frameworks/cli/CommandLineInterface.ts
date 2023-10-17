import { RemoveProductFromCartUseCase } from "@core/usecases/RemoveProductFromCartUseCase";
import { Product } from "@core/entities/Product";
import { ShoppingCart } from "@core/entities/ShoppingCart";
import { BuyProductUseCase } from "@core/usecases/BuyProductUseCase";
import { ListProductsUseCase } from "@core/usecases/ListProductsUseCase";
import { ProductRepository } from "@data/repositories/ProdutoRepository";

export class CommandLineInterface {
  constructor(
    private productRepository: ProductRepository,
    private shoppingCart: ShoppingCart
  ) {}

  public listProducts(): Product[] {
    const listProductsUseCase = new ListProductsUseCase(
      this.productRepository.listAll()
    );

    return listProductsUseCase.execute();
  }

  public buyProduct(product: Product): void {
    const buyProductUseCase = new BuyProductUseCase(product, this.shoppingCart);
    buyProductUseCase.execute();
  }

  public removeProductFromShoppingCart(barcode: number): void {
    const removeItemFromCartUseCase = new RemoveProductFromCartUseCase(this.shoppingCart);
    removeItemFromCartUseCase.execute(barcode);
  }

  public viewShoppingCart(): Product[] {
    return this.shoppingCart.items;
  }
}
