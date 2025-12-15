import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
 private apiUrl = 'http://localhost:3000/productos';  // URL base de la API
  constructor(private http: HttpClient) { }
  getProductos(action: string): Observable<any> {
    const url = `${this.apiUrl}?action=${action}`;  // URL dinámica basada en la acción
    return this.http.get<any>(url);  // Hacer la solicitud GET
  }
}