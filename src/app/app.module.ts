import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HeroComponent } from "./home/hero/hero.component";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, HomeComponent, NavbarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
