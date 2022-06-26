import { Component, OnInit } from "@angular/core";
import * as data from "../../data.json"
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})

export class ProductsComponent implements OnInit {

  prodId: any;
  _data: any = (data as any).default;
  typesOfWarehouse: any;
  productsOfTypes: any;
  specificProduct:any;

  typeDisable: boolean = true;
  showProduct: boolean = false;
  showtable: boolean = false;
  selectedType:any;

  constructor() {

  }
  selected()
  {
    this.showtable = !this.showtable
    if(this.showProduct){
      return
    }
    else{
    this.showProduct = true
    }
  };

  unselected()
  {
    this.specificProduct = null
    this.showProduct = false
  };

  warehouseSelected($event: any)
   {
    this.typeDisable = false;
    this._data.warehouse.filter((filtered: any) => {
      if (filtered.name == $event.target.value) {
        this.typesOfWarehouse = filtered.types
      }
    })
  };


  typeSelected($event: any) 
  {
    this.typesOfWarehouse.filter((filtered: any) => {
      if (filtered.name == $event.target.value) {
        this.selectedType = $event.target.value
        this.productsOfTypes = filtered.products
      }
    })
  };

  productSelected($event: any)
   {
    this.productsOfTypes.filter((filtered: any) => {
      if (filtered.name == $event.target.value) {
        this.specificProduct = filtered
        console.log(this.specificProduct,"PRODUCTS")
      }
    })
  };

search($event:any)
{
  this.showtable = true
  $event.preventDefault();
};

  ngOnInit()
   {

  };
}
