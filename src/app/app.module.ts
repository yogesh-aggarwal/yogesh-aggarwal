import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarsComponent } from "./components/sidebars/sidebars.component";
import { HeroComponent } from "./routes/home/hero/hero.component";
import { HomeComponent } from "./routes/home/home.component";
import { AboutMeComponent } from './routes/home/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HomeComponent,
    NavbarComponent,
    SidebarsComponent,
    AboutMeComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
