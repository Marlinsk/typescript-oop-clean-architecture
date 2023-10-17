import { Product } from "./core/entities/Product";
import { ShoppingCart } from "./core/entities/ShoppingCart";
import { initialProductData } from "./data/mocks/ProductData";
import { ProductRepository } from "./data/repositories/ProdutoRepository";
import { CommandLineInterface } from "./frameworks/cli/CommandLineInterface";

import main from "./presents/ConsolePresenter";

const shoppingCart = new ShoppingCart();
const productRepository = new ProductRepository();

const cli = new CommandLineInterface(productRepository, shoppingCart);

initialProductData.forEach((data) => {
  const produto = new Product({
    id: data.id,
    name: data.name,
    category: data.category,
    barcode: data.barcode,
    price: data.price,
    info: data.info
  })

  productRepository.create(produto)
});

main(cli)