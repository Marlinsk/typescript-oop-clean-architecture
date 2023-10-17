import { randomUUID } from "crypto";

export class Product {
  private _id: string;
  private _name: string;
  private _category: string;
  private _barcode: number;
  private _price: number;
  private _info: object;
  
  constructor({
    id,
    name,
    category,
    barcode,
    price,
    info
  }: {
    id?: string;
    name: string;
    category: string;
    barcode: number;
    price: number;
    info?: object;
  }) {
    this._id = id ?? randomUUID();
    this._name = name;
    this._category = category;
    this._barcode = barcode;
    this._price = price;
    this._info = info ?? {}; 
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get category(): string {
    return this._category;
  }

  public get barcode(): number {
    return this._barcode;
  }

  public get price(): number {
    return this._price;
  }

  public get info(): object {
    return this._info;
  }
}