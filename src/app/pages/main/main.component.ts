import { LoginComponent } from './../login/login.component';

import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PhotoService } from 'src/app/photo.service';
import {DialogService} from 'primeng/dynamicdialog';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers:[DialogService]
})

export class MainComponent implements OnInit {

  images!: any[];

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

value1: number = 42723;
activeIndex1: number = 0;

activeIndex2: number = 0;

scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` }));

  constructor(
    private primengConfig: PrimeNGConfig,
    private photoService: PhotoService,
    public dialogService: DialogService
    ) { }
  
  ngOnInit(): void {
    this.images = this.photoService.Image;
  }

  show() {
    const ref = this.dialogService.open(LoginComponent, {
        header: 'Entre em sua conta',
        width: '20%'
    });
}



}
