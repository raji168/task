import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsComponent } from './list-items/list-items.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { 
    path: 'login', component:LoginComponent 
  },
  {
    path: '', redirectTo:'/login', pathMatch: 'full'       
  },
  {
    path: 'register' , component:RegisterComponent
  },
  {
    path:'simpledatalisting', component:ListItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
