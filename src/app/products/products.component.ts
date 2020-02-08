import { Component, OnInit, ViewChild } from "@angular/core";
import { ProductsService } from "./products.service";
import { Product } from "./product";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort, MatPaginator } from "@angular/material";


export interface PeriodicElement {
  id: number;
    Company: string;
    Product: string;
    Type: string;
    Inches: string;
    Resolution: string;
    CPU: string;
    RAM: string;
    Memory: string;
    Graphics: string;
    OpSys: string;
    Weight: string;
    Price: string;
}
// let ELEMENT_DATA: PeriodicElement[] = [
//   {id: 1, Company: 'Hydrogen', Product: "1.0079", Type: 'H', Inches: 'Hydrogen',
//    Resolution: "1.0079", CPU: 'H', RAM: "1.0079", Memory: 'H', Graphics: "1.0079",
//    OpSys: 'H',Weight: "1.0079", Price: 'H'},
// ];

// let ELEMENT_DATA: PeriodicElement[] ;

// let data: Product[] = [];

let data: Product[] ;

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {

  
  displayedColumns: string[] = ["id", "Company", "Product","Type","Inches","Resolution"
,"CPU","RAM","Memory","Graphics","OpSys","Weight","Price"];


  isLoadingResults = true;
  dataSource = new MatTableDataSource(data);
  // @ViewChild(MatSort) sort: MatSort;
  constructor(private productsApi: ProductsService) {}

  // @ViewChild(MatSort) set matSort(ms: MatSort) {
  //   this.sort = ms;
  //   this.setDataSourceAttributes();
  // }
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // setDataSourceAttributes() {
  //   this.dataSource.sort = this.sort;
  // }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    //  this.dataSource.paginator = this.paginator;
    this.productsApi.getProducts().subscribe(
      res => {
      this.dataSource.data = res as Product[];
        console.log(res);
        this.isLoadingResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
