import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EmailjsComponent } from "./app/emailjs/emailjs.component";
import { SmptjsComponent } from "./app/smptjs/smptjs.component";
export const ROUTER = [
  {
    path: "",
    component: EmailjsComponent
  },
  {
    path: "smptJS",
    component: SmptjsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot([...ROUTER])],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
