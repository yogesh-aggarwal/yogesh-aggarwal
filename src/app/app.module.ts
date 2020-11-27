import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HeroComponent } from "./home/hero/hero.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarsComponent } from './components/sidebars/sidebars.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, HomeComponent, NavbarComponent, SidebarsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
