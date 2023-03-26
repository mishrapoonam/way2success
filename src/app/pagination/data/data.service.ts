import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  //   getItems(page: number, pageSize: number) {
  //     const params = new HttpParams()
  //       .set('_page', page.toString())
  //       .set('_limit', pageSize.toString());
  //     return this.http.get(this.apiUrl, { params });
  //   }
  getItems() {
    return this.http.get(this.apiUrl);
  }
}
