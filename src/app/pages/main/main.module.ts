import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { SplitterModule } from 'primeng/splitter';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import {AccordionModule} from 'primeng/accordion';
import { AppComponent } from "src/app/app.component";
import {GalleriaModule} from 'primeng/galleria';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
@NgModule({

  imports: [
    CommonModule,
    InputNumberModule,
    SplitterModule,
    TabViewModule,
    ButtonModule,
    AccordionModule,
    GalleriaModule,
    DynamicDialogModule,
    CommonModule,
    InputNumberModule,
    SplitterModule,
    TabViewModule,
    ButtonModule,
    AccordionModule,
    GalleriaModule,
  ]
})
export class MainModule { }
