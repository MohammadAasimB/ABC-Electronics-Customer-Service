import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginService } from './login.service';
import { Complaint } from '../model/complaint';
import { Product } from '../model/product';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/logIn';
  private bookComplaintUrl = 'http://localhost:8080/api/complaints';
  // loginService: any;

  constructor(private http: HttpClient, private loginService: LoginService) {}

  registerClient(clientData: any) {
    return this.http.post(
      'http://localhost:8080/api/clients/register',
      clientData,
      { responseType: 'text' as 'json' }
    );
  }

  // Login API call
  login(credentials: {
    username: string;
    password: string;
  }): Observable<{ token: string }> {
    // console.log('Decoded roles in login:', roles);
    return this.http.post<{ token: string }>(
      'http://localhost:8080/api/auth/login',
      credentials
    );
  }

  // logIn(name: string, password: string, role: string): Observable<string> {
  //   const url = `${this.baseUrl}/${name}/${password}/${role}`;
  //   return this.http.get<string>(url);
  // }

  getClientById(id: string): Observable<Client> {
    return this.http.get<Client>('http://localhost:8080/api/clients/' + id);
  }

  // logIn(name: string, password: string, role: string): Observable<string> {
  //   const url = `${this.baseUrl}/${name}/${password}/${role}`;
  //   return this.http.get(url, { responseType: 'text' }).pipe(
  //     tap((response) => {
  //       this.loginService.setSignin(true);
  //       this.loginService.setUserId(response);
  //     })
  //   );
  // }

  // addComplaint(complaint: Complaint): Observable<any> {
  //   return this.http.post('http://localhost:8080/complaints/add', complaint);
  // }

  bookComplaint(
    clientId: string,
    productModelNumber: string,
    complaint: any
  ): Observable<any> {
    const params = new HttpParams()
      .set('clientId', clientId)
      .set('productModelNumber', productModelNumber);

    return this.http.post('http://localhost:8080/complaints/book', complaint, {
      params,
    });
  }

  // addData(demo: DemoModel): Observable<any> {
  //   return this.http.post('http://localhost:8081/addData', demo);
  // }

  // getComplaintByClient(id: String): Observable<Complaint[]> {
  //   return this.http.get<Complaint[]>(
  //     'http://localhost:8080/complaints/all/' + id
  //   );
  // }

  getComplaintByClient(id: string): Observable<Complaint[]> {
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<Complaint[]>(
      'http://localhost:8080/complaints/all/' + id,
      { headers }
    );
  }

  getComplaintByEngineer(id: number): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(
      'http://localhost:8080/engineer/' + id + '/open-complaints'
    );
  }

  getComplaintByEngineerAndSorted(id: number): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(
      'http://localhost:8080/engineer/' + id + '/complaints/sorted-by-priority'
    );
  }

  complaintResolved(complaint: Complaint, id: number): Observable<any> {
    return this.http.put(
      'http://localhost:8080/api/clients/complaint/status/' + id,
      complaint
    );
  }

  getComplaintById(id: number): Observable<Complaint> {
    return this.http.get<Complaint>('http://localhost:8080/complaints/' + id);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'http://localhost:8080/api/products/allProducts'
    );
  }

  getComplaintsByEngineerStatusAndResolvedDate(
    engineerId: number,
    status: string,
    resolvedDate: string
  ): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(
      'http://localhost:8080/complaints/engineer/status/date',
      {
        params: {
          engineerId: engineerId.toString(),
          status: status,
          resolvedDate: resolvedDate,
        },
      }
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
