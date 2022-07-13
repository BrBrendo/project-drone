
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { PhotoService } from 'src/app/photo.service';
@Component({
  selector: 'app-piloto',
  templateUrl: './piloto.component.html',
  styleUrls: ['./piloto.component.scss']
})

export class PilotoComponent implements OnInit {

  images!: any[];
  items!: MenuItem[];
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
    ) { }
  
  ngOnInit(): void {
    this.images = this.photoService.Image;
  }

}
