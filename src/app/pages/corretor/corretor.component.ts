import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-corretor',
  templateUrl: './corretor.component.html',
  styleUrls: ['./corretor.component.scss'],
  encapsulation: ViewEncapsulation.None
 
})
export class CorretorComponent implements OnInit {
  items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {label: 'Step 1'},
      {label: 'Step 2'},
      {label: 'Step 3'}
  ];
  }

}
