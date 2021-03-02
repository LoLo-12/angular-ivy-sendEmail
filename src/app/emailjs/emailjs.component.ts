import { Component, OnInit } from "@angular/core";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";

@Component({
  selector: "app-emailjs",
  templateUrl: "./emailjs.component.html",
  styleUrls: ["./emailjs.component.css"]
})
export class EmailjsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public sendEmail(event) {
    event.preventDefault();
    console.log("ok");
    // SERVICE_ID - TEMPLATE_ID - USER_ID
    emailjs
      .sendForm(
        "service_br1asc8",
        "template_zrx0azn",
        event.target,
        "user_9u8vMJC2QVXrHZPGAjC57"
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          console.log("send ok");
        },
        error => {
          console.log(error.text, "send error");
        }
      );
  }
}
