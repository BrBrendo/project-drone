import { Component } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  items: MenuItem[] = [];

  panel: MenuItem[] = [];

  activeItem!: MenuItem;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      {
        label: 'File',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' },
          ]
        },
        { label: 'Open' },
        { label: 'Quit' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      }
    ];

    this.panel = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Projetos', icon: 'pi pi-fw pi-pencil' },
    ];


    this.activeItem = this.items[0];
  }
}
