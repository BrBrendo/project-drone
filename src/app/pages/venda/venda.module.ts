import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SplitterModule } from 'primeng/splitter';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import {AccordionModule} from 'primeng/accordion';
import { AppComponent } from 'src/app/app.component';
import {GalleriaModule} from 'primeng/galleria';
import { VendaComponent } from './venda.component';
import {ChipsModule} from 'primeng/chips';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [VendaComponent,AppComponent,],
  imports: [
    CommonModule,
    InputNumberModule,
    SplitterModule,
    TabViewModule,
    ButtonModule,
    AccordionModule,
    GalleriaModule,
    DropdownModule,
    InputMaskModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    ChipsModule,
    FormsModule
  ]
})
export class VendaModule { }
