export class ShoppingCartComponent implements OnInit {

  private items: Array<Item> = [];

  constructor() { }

  ngOnInit() {
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  removeItem(item: Item) {
    this.items = this.items.filter(i => i !== item);
  }

  calculateTotalPrize() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }

  displayItems() {
    console.log(this.items);
  }

}

interface Item {
  name: string;
  price: number;
}
