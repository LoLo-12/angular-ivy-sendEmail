import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EmailjsComponent } from "./app/emailjs/emailjs.component";
import { SmtpjsComponent } from "./app/smtpjs/smtpjs.component";
export const ROUTER = [
  {
    path: "",
    component: EmailjsComponent
  },
  {
    path: "smtpJS",
    component: SmtpjsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot([...ROUTER])],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
