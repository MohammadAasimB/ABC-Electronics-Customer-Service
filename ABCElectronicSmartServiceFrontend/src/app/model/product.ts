export class Product {
  constructor(
    public modelNumber: string,
    public productName: string,
    public productCategoryName: string,
    public dateofPurchase: Date,
    public warrantyYears: number,
    public warrantyDate: Date
  ) {}
}
