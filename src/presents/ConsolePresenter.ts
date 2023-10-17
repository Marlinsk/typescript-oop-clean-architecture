import { CommandLineInterface } from "@frameworks/cli/CommandLineInterface";
import { ProductViewModel } from "@view-models/ProductViewModel";
import prompt from "prompt-sync";

export default function main(cli: CommandLineInterface) {
  const keyboard = prompt();
  let option = "";

  while (option !== "5") {
    console.log("Menu:");
    console.log("1. Listar Produtos");
    console.log("2. Comprar Produto");
    console.log("3. Visualizar Carrinho de Compras");
    console.log("4. Remover Produto do Carrinho de Compras");
    console.log("5. Sair");

    const choice = keyboard("Escolha a opção: ");

    switch (choice) {
      case "1":
        const products = cli.listProducts();
        console.log("Produtos:", products.map((product) => ProductViewModel.viewProduct(product)));
        break;

      case "2":
        const productsToBuy = cli.listProducts();
        const productsInCart = cli.viewShoppingCart();
        console.log("Produtos:", productsToBuy.map((product) => ProductViewModel.viewProduct(product)));

        const barcodeInput = keyboard("Digite o código de barras do produto que deseja comprar: ");
        
        if (barcodeInput !== null) {
          const barcodeToBuy = parseInt(barcodeInput, 10);
          const productToBuy = productsToBuy.find((product) => product.barcode === barcodeToBuy);

          if (productToBuy) {
            cli.buyProduct(productToBuy);
            console.log(`Produto '${productToBuy.name}' adicionado ao carrinho.`);
            console.log("Carrinho atualizado:", productsInCart.map((product) => ProductViewModel.viewProduct(product)));
          } else {
            console.log("Produto não encontrado.");
          }
        } else {
          console.log("Entrada inválida. Tente novamente.");
        }
        break;

      case "3":
        const shoppingCart = cli.viewShoppingCart();
        const cartItems = shoppingCart.map((product) => ProductViewModel.viewProduct(product));
        const totalPrice = cartItems.reduce((total, product) => total + product.price, 0);

        console.log("Carrinho de Compras:", shoppingCart.map((product) => ProductViewModel.viewProduct(product)));
        console.log("Preço total:", totalPrice.toFixed(2));
        break;

      case "4":
        const productsInShoppingCart = cli.viewShoppingCart();
        console.log("Produtos:", productsInShoppingCart.map((product) => ProductViewModel.viewProduct(product)));

        const barcodeKeyboardValue = keyboard("Digite o código de barras do produto que deseja remover: ");
        
        if (barcodeKeyboardValue !== null) {
          const barcodeToRemove = parseInt(barcodeKeyboardValue, 10);
          const productToRemove = productsInShoppingCart.find((product) => product.barcode === barcodeToRemove);

          if (productToRemove) {
            cli.removeProductFromShoppingCart(barcodeToRemove);
            console.log(`Produto '${productToRemove.name}' removido do carrinho.`);
            console.log("Carrinho atualizado:", productsInShoppingCart);
          } else {
            console.log("Produto não encontrado.");
          }
        } else {
          console.log("Entrada inválida. Tente novamente.");
        }
        break;

      case "5":
        console.log("Saindo da aplicação. Até logo!");
        return;

      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
}
