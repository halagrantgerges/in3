import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Product } from './product';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3333/API/V1/Tasks/";
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
  constructor(private http: HttpClient) { }

  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl+"getData/")
      .pipe(
        tap(heroes => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }


getFeaturedProducts(body:{}): Observable<Product[]> {
  return this.http.post<Product[]>(apiUrl+"getFeaturedData/",body)
    .pipe(
      tap(heroes => console.log('fetched products')),
      catchError(this.handleError('getProducts', []))
    );
}




  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
