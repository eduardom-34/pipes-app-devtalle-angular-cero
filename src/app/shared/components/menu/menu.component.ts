import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``,
})
export class MenuComponent  implements OnInit {

  // public menuItems: MenuItem[] = [];
  public menuBar: MenubarModule[] = [];

  ngOnInit() {
    this.menuBar = [
        {
          label: 'Pipes de angular',
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Textos y Fechas',
              icon: 'pi pi-align-left',
            },
            {
              label: 'Numeros',
              icon: 'pi pi-dollar',
            },
            {
              label: 'No comunes',
              icon: 'pi pi-globe',
            },
          ]
        },
        {
          label: 'Pipes personalizados',
          icon: 'pi pi-cog',
          items: [
            {
              label: 'Otro elemento',
              icon: 'pi pi-cog',
            }
          ]
        }
      ];

}

}
