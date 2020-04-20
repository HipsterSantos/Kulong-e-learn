import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandPageComponent } from './land-page/land-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './land-page/navbar/navbar.component';
import { NavbarDashboardComponent } from './dashboard/navbar/navbar.component';

import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { ProfessorBarComponent } from './dashboard/professor-bar/professor-bar.component';
import { UniversityComponent } from './land-page/university/university.component';
import { LoginComponent } from './land-page/login/login.component';
import { VideosComponent } from './dashboard/videos/videos.component';
import { PostsComponent } from './dashboard/posts/posts.component';
import { BrowserComponent } from './dashboard/browser/browser.component';

import { HomeComponent } from './land-page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LandPageComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    ProfessorBarComponent,
    UniversityComponent,
    LoginComponent,
    VideosComponent,
    PostsComponent,
    BrowserComponent,
    NavbarDashboardComponent,
    HomeComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
