import { Component, OnInit, ViewChild } from "@angular/core";
import { ProductsService } from "./products.service";
import { Product } from "./product";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort, MatPaginator } from "@angular/material";
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ["id", "Company", "Product","Type","Inches","Resolution"
,"CPU","RAM","Memory","Graphics","OpSys","Weight","Price"];

  data: Product[] = [];
  isLoadingResults = true;
  dataSource = new MatTableDataSource(this.data);
  @ViewChild(MatSort) sort: MatSort;
  constructor(private productsApi: ProductsService) {}

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
  //  this.matPaginator = mp;
  // this.setDataSourceAttributes();
  //  }

  setDataSourceAttributes() {
    // this.dataSource.paginator = this.matPaginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
     this.dataSource.paginator = this.paginator;


    this.productsApi.getProducts().subscribe(
      res => {
        this.data = res;
        this.dataSource.paginator = this.paginator;
        console.log(this.data);
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
