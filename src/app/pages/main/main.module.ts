import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { SplitterModule } from 'primeng/splitter';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {GalleriaModule} from 'primeng/galleria';
@NgModule({

  declarations: [
    MainComponent,
  ],
  imports: [

    InputNumberModule,
    SplitterModule,
    TabViewModule,
    ButtonModule,
    AccordionModule,
    GalleriaModule,
    InputNumberModule,
    SplitterModule,
    TabViewModule,
    ButtonModule,
    AccordionModule,
    GalleriaModule,
  ]
})
export class MainModule { }
