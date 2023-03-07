import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public base_url = env.server_url;
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(
    private httpClient: HttpClient,
  ) { }

  public get(path: string, params): Observable<any> {
    return this.httpClient.get(`${this.base_url}` + path, { params }).pipe(catchError(this.formatErrors));
  }

  public put(path: string, body: object = {}): Observable<any> {
    return this.httpClient
      .put(`${this.base_url}` + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public post(path: string, body: object = {}): Observable<any> {
    return this.httpClient
      .post(`${this.base_url}` + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public postWithFormData(path: string, body: any): Observable<any> {
    return this.httpClient
      .post<any>(`${this.base_url}` + path, body).pipe(catchError(this.formatErrors));
  }

  public delete(path: string): Observable<any> {
    return this.httpClient.delete(`${this.base_url}` + path).pipe(catchError(this.formatErrors));
  }

  public formatErrors(error: any): Observable<any> {
    return throwError(error.error);
  }
}
