
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { LoginComponent } from './pages/login/login.component';
import { CardModule } from "primeng/card";

import { PilotoComponent } from './pages/cliente/piloto.component';
import { CorretorComponent } from './pages/corretor/corretor.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PilotoComponent,
    LoginComponent,
    CorretorComponent
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
    StepsModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
