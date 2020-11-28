import { Injectable } from "@angular/core";

interface ProjectInterface {
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  projectUrl: string;
  imageUrl: string;
}

@Injectable({
  providedIn: "root",
})
export class DataService {
  email: string = "yogeshdevaggarwal@gmail.com";
  featuredProjects: ProjectInterface[] = [];
  otherProjects: ProjectInterface[] = [];
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
