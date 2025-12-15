import { Component } from '@angular/core';
import { ProductosService } from './productos.service';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularMVVM';
    usuarios: any[] = [];
  productos: any[] = [];
  clientes: any[] = [];
  pedidos: any;
  error: string | null = null;
  data: any;  // Variable para almacenar los datos
  loading: boolean = true;  // Indicador de carga
  constructor(private productoService: ProductosService, private clientesService: ClientesService) { }

ngOnInit() {
  this.getProductos();
  this.getClientes();
}

getProductos(): void {
    this.productoService.getProductos('usuarios').subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios;  // Asignar los datos de productos
        this.productos = usuarios;  // Asignar la respuesta a la variable 'data'
      },
      error: (err) => {
        this.error = 'Error al cargar productos';  // Manejar errores
        console.error(err);
      }
    });
  }

  getClientes(): void {
    this.clientesService.getClientes('clientes').subscribe({
      next: (clientes) => {
        this.clientes = clientes;  // Asignar los datos de clientes
      },
      error: (err) => {
        this.error = 'Error al cargar clientes';  // Manejar errores
        console.error(err);
      }
    });
  }
}

  