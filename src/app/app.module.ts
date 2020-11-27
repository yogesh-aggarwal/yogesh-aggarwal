import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./routes/home/home.component";
import { HeroComponent } from "./routes/home/hero/hero.component";
import { ContactComponent } from './routes/contact/contact.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, HomeComponent, ContactComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
