import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  email: string = "yogeshdevaggarwal@gmail.com";
  projects = [];

  constructor() {}
}
