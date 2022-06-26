import { Component, Input, OnInit } from "@angular/core";

declare let $: any ;

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"]
})

export class BreadcrumbComponent implements OnInit {
  showProductNav = false;
  constructor() { 

  }

  hideProduct()
  {
    console.log("HIDE")
    this.showProductNav = false
  };

  closeModal()
  {
    $('#exampleModal').modal('hide')
     this.showProductNav = true;
  };

  ngOnInit()
   {

  };
};
