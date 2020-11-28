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
  featuredProjects: ProjectInterface[] = [
    {
      name: "Fanatic",
      imageUrl: "https://bit.ly/37tmGmR",
      description:
        "Website for Anime Fans where they can enjoy their favorite Anime Series. Desktop Application",
      githubUrl: "https://github.com/yogesh-aggarwal/fanatic",
      projectUrl: "https://anime-fanatic.web.app/",
      technologies: ["Angular", "Firebase", "Firestore"],
    },
    {
      name: "Fanatic",
      imageUrl: "https://bit.ly/37tmGmR",
      description:
        "Website for Anime Fans where they can enjoy their favorite Anime Series. Desktop Application",
      githubUrl: "https://github.com/yogesh-aggarwal/fanatic",
      projectUrl: "https://anime-fanatic.web.app/",
      technologies: ["Angular", "Firebase", "Firestore"],
    },
  ];
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
