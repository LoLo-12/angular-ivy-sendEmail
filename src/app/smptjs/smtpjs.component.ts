import { Component, OnInit } from "@angular/core";
import "smtpjs";
declare let Email: any;

@Component({
  selector: "app-smtpjs",
  templateUrl: "./smtpjs.component.html",
  styleUrls: ["./smtpjs.component.css"]
})
export class SmtpjsComponent implements OnInit {
  form = {
    name: "",
    email: "",
    message: ""
  };
  constructor() {}

  ngOnInit() {}

  // https://www.smtpjs.com/
  // https://note.jackie.com.tw/index.php/2020/09/05/smtpjs-send-gmail/
  public sendForm() {
    Email.send({
      SecureToken: "C973D7AD-F097-4B95-91F4-40ABC5567812",
      To: "them@website.com",
      From: "you@isp.com",
      Subject: "This is the subject",
      Body: "And this is the body"
    }).then(message => alert(message));
  }
}
