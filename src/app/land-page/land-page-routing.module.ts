import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UniversityComponent } from './university/university.component';
import { LandPageComponent } from './land-page.component'; 
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: LandPageComponent, 
  children: [
    {path: 'login', component: LoginComponent},
    {path: 'universidade', component:UniversityComponent},
    {path: '', component: NavbarComponent}

] }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
    
  exports: [RouterModule]
})
export class LangPageRoutingModule { }
