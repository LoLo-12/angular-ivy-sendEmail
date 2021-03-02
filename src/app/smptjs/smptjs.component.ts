import { Component, OnInit } from "@angular/core";
declare let Email: any;

@Component({
  selector: "app-smptjs",
  templateUrl: "./smptjs.component.html",
  styleUrls: ["./smptjs.component.css"]
})
export class SmptjsComponent implements OnInit {
  token = "2f1ff130-377f-4046-9d0b-df7876d0e122";
  form = {
    name: "",
    email: "",
    message: ""
  };
  constructor() {}

  ngOnInit() {}

  // https://www.smtpjs.com/
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
