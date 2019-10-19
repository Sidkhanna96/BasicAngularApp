import { Component, OnInit } from "@angular/core";
import { HttpServiceService } from "../http-service.service";

@Component({
  selector: "app-languages",
  templateUrl: "./languages.component.html",
  styleUrls: ["./languages.component.scss"]
})
export class LanguagesComponent implements OnInit {
  brews: Object;

  constructor(private _http: HttpServiceService) {}

  // whatever service inside of here runs when component is loaded
  ngOnInit() {
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log("BREWS", this.brews);
    });
  }
}
