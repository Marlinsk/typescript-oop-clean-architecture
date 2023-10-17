import { Product } from "./Product";

export class ShoppingCart {
  private _items: Product[] = [];

  public addItem(product: Product): void {
    this._items.push(product);
  }

  public removeItem(barcode: number): void {
    const findIndex = this._items.findIndex((findProduct) => findProduct.barcode === barcode);
    this._items.splice(findIndex, 1);
  }

  public get items(): Product[] {
    return this._items;
  }
}
