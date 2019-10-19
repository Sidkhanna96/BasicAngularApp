import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpServiceService {
  constructor(private httpOfBrewries: HttpClient) {}

  getBeer() {
    return this.httpOfBrewries.get("https://api.openbrewerydb.org/breweries");
  }
}
