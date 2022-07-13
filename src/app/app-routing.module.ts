import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadComponent } from './pages/cad/cad.component';
import { PilotoComponent } from './pages/cliente/piloto.component';
import { CorretorComponent } from './pages/corretor/corretor.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { VendaComponent } from './pages/venda/venda.component';

const routes: Routes = [
{path:'main', component: MainComponent,},
{path:'cliente', component: PilotoComponent,},
{path:'login', component: LoginComponent,},
{path:'corretor', component: CorretorComponent,},
{path:'cad', component: CadComponent,},
{path:'venda', component: VendaComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
