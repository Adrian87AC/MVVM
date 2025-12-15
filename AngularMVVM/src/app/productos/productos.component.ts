import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor y pipes

// Definimos la forma de nuestros datos
export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagenUrl: string;
  descripcion: string;
}

@Component({
  selector: 'app-productos',
  standalone: true, // Asumo que usas Angular moderno (Standalone)
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  
  listaProductos: Producto[] = [
    {
      id: 1,
      nombre: 'Smartphone X',
      precio: 899.99,
      imagenUrl: 'https://via.placeholder.com/300',
      descripcion: 'Lo último en tecnología móvil.'
    },
    {
      id: 2,
      nombre: 'Laptop Pro',
      precio: 1250.00,
      imagenUrl: 'https://via.placeholder.com/300',
      descripcion: 'Potencia para profesionales.'
    },
    {
      id: 3,
      nombre: 'Auriculares Wireless',
      precio: 150.00,
      imagenUrl: 'https://via.placeholder.com/300',
      descripcion: 'Sonido envolvente sin cables.'
    },
    {
      id: 4,
      nombre: 'Monitor 4K',
      precio: 320.00,
      imagenUrl: 'https://via.placeholder.com/300',
      descripcion: 'Colores vivos y reales.'
    },
    {
      id: 5,
      nombre: 'Teclado Gamer',
      precio: 75.50,
      imagenUrl: 'https://via.placeholder.com/300',
      descripcion: 'Retroiluminación RGB.'
    }
  ];
}