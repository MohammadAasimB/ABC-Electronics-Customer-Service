import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginService } from './login.service';
import { Complaint } from '../model/complaint';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/logIn';
  private bookComplaintUrl = 'http://localhost:8080/api/complaints';
  // loginService: any;

  constructor(private http: HttpClient, private loginService: LoginService) {}

  // logIn(name: string, password: string, role: string): Observable<string> {
  //   const url = `${this.baseUrl}/${name}/${password}/${role}`;
  //   return this.http.get<string>(url);
  // }

  logIn(name: string, password: string, role: string): Observable<string> {
    const url = `${this.baseUrl}/${name}/${password}/${role}`;
    return this.http.get(url, { responseType: 'text' }).pipe(
      tap((response) => {
        this.loginService.setSignin(true);
        this.loginService.setUserId(response);
      })
    );
  }

  addComplaint(complaint: Complaint): Observable<Complaint> {
    return this.http.post<Complaint>(`${this.bookComplaintUrl}/add`, complaint);
  }

  getComplaintByClient(id: String): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(
      'http://localhost:8080/complaints/all/' + id
    );
  }

  getComplaintByEngineer(id: String): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(
      'http://localhost:8080/engineer/' + id + '/open-complaints'
    );
  }

  getComplaintById(id: number): Observable<Complaint> {
    console.log('this is service');
    return this.http.get<Complaint>('http://localhost:8080/complaints/' + id);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'http://localhost:8080/api/products/allProducts'
    );
  }

  // bookComplaint(
  //   clientId: string,
  //   productModelNumber: string,
  //   complaint: { description: string }
  // ): Observable<string> {
  //   const url = `${this.bookComplaintUrl}/complaints/book`;
  //   const params = { clientId, productModelNumber };
  //   return this.http.post<string>(url, complaint, { params });
  // }
}
