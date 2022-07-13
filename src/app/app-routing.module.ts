import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotoComponent } from './pages/cliente/piloto.component';
import { CorretorComponent } from './pages/corretor/corretor.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
{path:'main', component: MainComponent,},
{path:'cliente', component: PilotoComponent,},
{path:'login', component: LoginComponent,},
{path:'corretor', component: CorretorComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
