
import { Component, OnInit,ViewEncapsulation } from '@angular/core';

import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-cad',
  templateUrl: './cad.component.html',
  styleUrls: ['./cad.component.scss']
})

export class CadComponent  implements OnInit {



  constructor(
    private primengConfig: PrimeNGConfig,

    ) { }
  
  ngOnInit(): void {

  }

}
