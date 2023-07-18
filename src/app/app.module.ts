

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { MainComponent } from './pages/main/main.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {SplitterModule} from 'primeng/splitter';
import {TabViewModule} from 'primeng/tabview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {CarouselModule} from 'primeng/carousel';
import {GalleriaModule} from 'primeng/galleria';
import { PhotoService } from './photo.service';
import {AvatarModule} from 'primeng/avatar';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TabMenuModule} from 'primeng/tabmenu';
import {StepsModule} from 'primeng/steps';
import {TableModule} from 'primeng/table';
import { CardModule } from "primeng/card";
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from "primeng/dropdown";
import {CalendarModule} from 'primeng/calendar';
import { MainService } from './pages/main/main.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputNumberModule,
    SplitterModule,
    TabViewModule,
    ButtonModule,
    AccordionModule,
    GalleriaModule,
    CarouselModule,
    AvatarModule ,
    TieredMenuModule,
    TabMenuModule,
    TableModule,
    CardModule,
    StepsModule,
    FormsModule,
    DropdownModule,
    CalendarModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastModule,
    CommonModule,
  ],
  providers: [PhotoService,MainService,FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
