import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './land-page/login/login.component';
import { UniversityComponent } from './land-page/university/university.component';
import { LandPageComponent } from './land-page/land-page.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideosComponent } from './dashboard/videos/videos.component';
import { PostsComponent } from './dashboard/posts/posts.component';
import { BrowserComponent } from './dashboard/browser/browser.component';
import { PanelComponent } from './dashboard/panel/panel.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { HomeComponent } from './land-page/home/home.component';

const routes: Routes = [

  {path:'',component: LandPageComponent },
    {path:'login', component: LoginComponent},
    {path:'universidade', component:UniversityComponent},
    // {path:'',component: LandPageComponent},
   {path:'videos', component: VideosComponent},
  {path:'dashboard', component:DashboardComponent, children:[
    {path:'videos', component: VideosComponent},
    {path:'posts', component: PostsComponent},
    {path:'browser', component: BrowserComponent},
    {path:'panel', component: PanelComponent},
    {path:'', redirectTo: 'browser',pathMatch:'full'},
    {path:'', component: NotificationComponent, outlet:'notification'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
