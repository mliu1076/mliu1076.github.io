import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Intro } from './intro.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ButtonMenuComponent } from './button-menu/button-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    Intro,
    MenuComponent,
    AboutComponent,
    ButtonMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
