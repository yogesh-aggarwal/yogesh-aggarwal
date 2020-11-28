import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  email: string = "yogeshdevaggarwal@gmail.com";
  projects = [];
  technologies: string[] = [
    "Angular",
    "ReactJS",
    "Firebase",
    "Flutter",
    "React Native",
    "Django",
  ];
  madeUsing: string[] = ["Angular 11", "Firebase"];

  constructor() {}
}
