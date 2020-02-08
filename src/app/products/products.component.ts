import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['id','Company', 'Product'];
data: Product[] = [];
isLoadingResults = true;
dataSource = new MatTableDataSource(this.data);

  constructor(private productsApi: ProductsService) { }

  ngOnInit() {

  this.productsApi.getProducts()
  .subscribe(res => {
    this.data = res;
    console.log(this.data);
    this.isLoadingResults = false;
  }, err => {
    console.log(err);
    this.isLoadingResults = false;
  });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
