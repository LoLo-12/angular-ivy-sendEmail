import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "../app-routing.module";
import { EmailjsComponent } from "./emailjs/emailjs.component";
import { SmtpjsComponent } from "./smtpjs/smtpjs.component";
@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, EmailjsComponent, SmtpjsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
