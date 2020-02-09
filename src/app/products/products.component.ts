import { Component, OnInit, ViewChild } from "@angular/core";
import { ProductsService } from "./products.service";
import { Product } from "./product";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort, MatPaginator } from "@angular/material";
import { IgxFilterOptions } from 'igniteui-angular';
import { DeviceDetectorService } from 'ngx-device-detector';

let data: Product[];

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  deviceInfo = null;
  products :Product[];
  displayedColumns: string[] = [
    "id",
    "Company",
    "Product",
    "Type",
    "Inches",
    "Resolution",
    "CPU",
    "RAM",
    "Memory",
    "Graphics",
    "OpSys",
    "Weight",
    "Price"
  ];
  public searchProducts: string;
  isLoadingResults = true;
  dataSource = new MatTableDataSource(data);
  constructor(private productsApi: ProductsService,private deviceService: DeviceDetectorService) {}
  isMobile:Boolean;
  isDesktopDevice:Boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {

    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
    this.isDesktopDevice = this.deviceService.isDesktop()||this.deviceService.isTablet();

    this.dataSource.paginator = this.paginator;
    this.productsApi.getProducts().subscribe(
      res => {
        this.dataSource.data = res as Product[];
        this.products=res;
        console.log(res);
        this.isLoadingResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
  get filterContacts(): IgxFilterOptions {
    const fo = new IgxFilterOptions();
    console.log(fo);
    fo.key = 'Company';
    fo.inputValue = this.searchProducts;
    return fo;
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
