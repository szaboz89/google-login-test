import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {HomeComponent} from './component/home/home.component';
import {AboutComponent} from './component/about/about.component';
import {AlertComponent} from './component/alert/alert.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {AlertService} from './service/alert.service';
import {AboutService} from './service/about.service';
import {AuthService} from './service/auth.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [AlertService, AboutService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
