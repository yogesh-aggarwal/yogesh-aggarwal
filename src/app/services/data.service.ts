import { Injectable } from "@angular/core";

interface ProjectInterface {
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  projectUrl: string;
  imageUrl?: string;
}

@Injectable({
  providedIn: "root",
})
export class DataService {
  social: any = {
    github: "https://github.com/yogesh-aggarwal",
    twitter: "https://twitter.com/YogeshDev215",
    facebook: "https://www.facebook.com/yogesh.aggarwal.50702769",
    instagram: "https://www.instagram.com/developer.exe",
    linkedin: "https://www.linkedin.com/in/yogesh-aggarwal-90a7ab1b2",
  };
  email: string = "yogeshdevaggarwal@gmail.com";
  featuredProjects: ProjectInterface[] = [
    {
      name: "Fanatic",
      imageUrl: "https://bit.ly/37tmGmR",
      description:
        "Website for Anime Fans where they can enjoy their favorite Anime Series. Desktop Application.",
      githubUrl: "https://github.com/yogesh-aggarwal/fanatic",
      projectUrl: "https://anime-fanatic.web.app/",
      technologies: ["Angular", "Firebase", "Firestore"],
    },
    {
      name: "Memo Messenger",
      imageUrl: "https://bit.ly/2HostPC",
      description:
        "Messenger application that serves you best chatting experience.",
      githubUrl: "https://github.com/yogesh-aggarwal/memo-messenger",
      projectUrl: "",
      technologies: ["Flutter", "Firebase", "RxDart"],
    },
    {
      name: "Flamingo",
      imageUrl: "https://bit.ly/3jdL6TA",
      description:
        "If you're a studious person then you will like this project. This has a large collection of books that you can read & enjoy!",
      githubUrl: "",
      projectUrl: "",
      technologies: ["Flutter", "Firebase", "RxDart"],
    },
  ];
  otherProjects: ProjectInterface[] = [
    {
      name: "Fanatic",
      description:
        "Website for Anime Fans where they can enjoy their favorite Anime Series. Desktop Application",
      githubUrl: "https://github.com/yogesh-aggarwal/fanatic",
      projectUrl: "https://anime-fanatic.web.app/",
      technologies: ["Angular", "Firebase", "Firestore"],
    },
  ];
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
