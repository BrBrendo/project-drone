

import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})

export class VendaComponent  implements OnInit {

  value1: string[] = ["Orçamento pendente"];
  value2: string []= ["pendente"];
  value3: string []= ["pendente"];
  value4: string []= ["pendente"];
  value5: string []= ["13/07/2022"];

  constructor(
    private primengConfig: PrimeNGConfig,

    ) { }
  
  ngOnInit(): void {

  }

}
