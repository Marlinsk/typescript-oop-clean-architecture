import { CommandLineInterface } from "../frameworks/cli/CommandLineInterface";
import { ProductViewModel } from "../view-models/ProductViewModel";

import prompt from "prompt-sync";

export default function main(cli: CommandLineInterface) {
  let keyboard = prompt();
  let option: string = "";

  while (option != "4") {
    console.log("Menu:");
    console.log("1. Listar Produtos");
    console.log("2. Comprar Produto");
    console.log("3. Visualizar Carrinho de Compras");
    console.log("4. Sair");
    const choice = keyboard("Escolha a opção: ");
    switch (choice) {
      case "1":
        const products = cli.listProducts();
        console.log(
          "Produtos:",
          products.map((data) => ProductViewModel.viewProduct(data))
        );
        break;
      case "2":
        const productsToBuy = cli.listProducts();
        console.log(
          "Produtos:",
          productsToBuy.map((data) => ProductViewModel.viewProduct(data))
        );
        const barcodeInput = keyboard(
          "Digite o código de barras do produto que deseja comprar: "
        );
        if (barcodeInput !== null) {
          const barcodeToBuy = parseInt(barcodeInput, 10);
          const productToBuy = productsToBuy.find(
            (product) => product.barcode === barcodeToBuy
          );
          if (productToBuy) {
            cli.buyProduct(productToBuy);
            console.log(
              `Produto '${productToBuy.name}' adicionado ao carrinho.`
            );
          } else {
            console.log("Produto não encontrado.");
          }
        } else {
          console.log("Entrada inválida. Tente novamente.");
        }
        break;
      case "3":
        const shoppingCart = cli.viewShoppingCart();
        const cartItems = shoppingCart.map((data) =>
          ProductViewModel.viewProduct(data)
        );
        const totalPrice = cartItems.reduce(
          (total, product) => total + product.price,
          0
        );
        console.log(
          "Carrinho de Compras:",
          shoppingCart.map((data) => ProductViewModel.viewProduct(data))
        );
        console.log("Preço total:", totalPrice.toFixed(2));
        break;
      case "4":
        console.log("Saindo da aplicação. Até logo!");
        return;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
}
