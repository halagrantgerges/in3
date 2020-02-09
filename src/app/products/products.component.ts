import { Component, OnInit, ViewChild } from "@angular/core";
import { ProductsService } from "./products.service";
import { Product } from "./product";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort, MatPaginator } from "@angular/material";
import { IgxFilterOptions } from "igniteui-angular";
import { DeviceDetectorService } from "ngx-device-detector";

let data: Product[];

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  deviceInfo = null;
  products: Product[];
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
  constructor(
    private productsApi: ProductsService,
    private deviceService: DeviceDetectorService
  ) {}
  isMobile: Boolean;
  isDesktopDevice: Boolean;
  ProductSearch: String;
  CompanySearch: string;
  CPU_Intel : boolean;
  CPU_Atom : boolean;
  CPU_AMD : boolean;
  RAM_2G : boolean;
  RAM_4G : boolean;
  RAM_8G : boolean;
  RAM_16G : boolean;
  OpSys_Mac : boolean;
  OpSys_Windows : boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
    this.isDesktopDevice =
      this.deviceService.isDesktop() || this.deviceService.isTablet();

    this.productsApi.getProducts().subscribe(
      res => {
        this.dataSource.data = res as Product[];
        this.dataSource.paginator = this.paginator;
        this.products = res;
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
    fo.key = "Company";
    fo.inputValue = this.searchProducts;
    return fo;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggleVisibility(event: Event) {
    //TODO change the class of the li to active
  }
  searchProductsAPI() {
    console.log("hello searcher", this.ProductSearch, this.CompanySearch,this.CPU_Intel,this.CPU_Atom,this.CPU_AMD);
    let body={
      Company:this.CompanySearch,
      Product:this.ProductSearch,
      RAM:(this.RAM_2G?'2G,':'')+(this.RAM_4G?'4G,':'')+(this.RAM_8G?'8G,':'')+(this.RAM_16G?'16G,':''),
      CPU:(this.CPU_AMD?'CPU_AMD,':'')+(this.CPU_Atom?'CPU_Atom,':'')+(this.CPU_Intel?'CPU_Intel,':''),
      OpSys:(this.OpSys_Mac?'OpSys_Mac,':'')+(this.OpSys_Windows?'OpSys_Windows,':'')
    }
    this.productsApi.getFeaturedProducts(body).subscribe(
      res => {
        this.dataSource.data = res as Product[];
        this.dataSource.paginator = this.paginator;
        this.products = res;
        console.log(res);
        this.isLoadingResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
