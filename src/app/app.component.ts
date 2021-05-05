import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Clientes', url: 'cliente', icon: 'people' },
    { title: 'Produtos', url: 'produto', icon: 'gift' },
    { title: 'Pedidos', url: 'pedido', icon: 'bag-handle' },
  ];
 
  constructor() {}
}
