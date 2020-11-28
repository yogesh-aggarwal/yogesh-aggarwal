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
      name: "Expenses Manager",
      imageUrl: "https://bit.ly/2JmPdjM",
      description:
        "Simple to use android mobile application that helps you to manage your daily expenses & keep you on budget.",
      githubUrl: "https://github.com/yogesh-aggarwal/expenses-manager",
      projectUrl:
        "https://github.com/yogesh-aggarwal/expenses-manager/releases",
      technologies: ["Ionic 5", "Angular", "Firebase", "RxJS"],
    },
    {
      name: "Ravel",
      imageUrl: "https://bit.ly/3o8l3A3",
      description:
        "Blogging website where people can write their blog & other people will be able to read them & gather any sort of nowledge from it.",
      githubUrl: "https://github.com/yogesh-aggarwal/ravel",
      projectUrl: "https://github.com/yogesh-aggarwal/ravel/releases",
      technologies: ["Angular", "Firebase", "RxJS", "EditorJS"],
    },
    {
      name: "Folder Prettifier",
      imageUrl: "https://bit.ly/2HPhEqg",
      description:
        "Cross-Platform desktop application specifically tailored for all those people who need to manage their folders within only 1-click. This application provides you all the operations that one need to manage the folders easily & beautifully",
      githubUrl: "https://github.com/TheRaidBlueCompany/folder-prettifier",
      projectUrl:
        "https://github.com/TheRaidBlueCompany/folder-prettifier/releases/tag/v2.0.0",
      technologies: ["WinForms", "C#", "Visual Studio 2019"],
    },
    {
      name: "Folder Prettifier Website",
      imageUrl: "https://bit.ly/3q6UwVr",
      description: "Website create to promote the Folder Prettifier",
      githubUrl:
        "https://github.com/TheRaidBlueCompany/folder-prettifier-website",
      projectUrl: "https://folder-prettifier.web.app/",
      technologies: ["Angular"],
    },
    {
      name: "NewsIfy",
      imageUrl: "https://bit.ly/3fKmAZR",
      description:
        "One-stop solution for all the news readers. It provides latest news from various sources including BBC, TOI, HT etc.",
      githubUrl: "https://github.com/yogesh-aggarwal/newsify",
      projectUrl: "https://github.com/yogesh-aggarwal/newsify/releases",
      technologies: ["ElectronJS", "Angular", "News Rest API"],
    },
  ];
  otherProjects: ProjectInterface[] = [
    {
      name: "Jycore Assistant",
      description:
        "Website for Anime Fans where they can enjoy their favorite Anime Series. Desktop Application",
      githubUrl: "https://github.com/yogesh-aggarwal/assistant",
      projectUrl: "https://github.com/yogesh-aggarwal/assistant/releases",
      technologies: ["Python", "ML & AI", "MongoDB", "PyMongo", "Automation"],
    },
    {
      name: "SQL Tools",
      description:
        "Website for Anime Fans where they can enjoy their favorite Anime Series. Desktop Application",
      githubUrl: "https://github.com/yogesh-aggarwal/sql-tools-lib",
      projectUrl: "https://pypi.org/project/sql-tools/",
      technologies: [
        "Python",
        "SQLite",
        "MySQL",
        "Flask",
        "Front-End (interface)",
      ],
    },
    {
      name: "Rest To GraphQL",
      description:
        "Website for Anime Fans where they can enjoy their favorite Anime Series. Desktop Application",
      githubUrl: "https://github.com/yogesh-aggarwal/rest-to-gql",
      projectUrl: "",
      technologies: [
        "Rest API",
        "GraphQL API",
        "Mongoose",
        "MongoDB",
        "Python",
      ],
    },
    {
      name: "Falcon QnA Backend",
      description:
        "Website for Anime Fans where they can enjoy their favorite Anime Series. Desktop Application",
      githubUrl: "https://github.com/yogesh-aggarwal/falcon-qna-backend",
      projectUrl: "",
      technologies: [
        "GraphQL API",
        "Mongoose",
        "MongoDB",
        "NodeJS",
        "TypeScript",
        "Apollo Server",
      ],
    },
    {
      name: "Almater",
      description:
        "Website for Anime Fans where they can enjoy their favorite Anime Series. Desktop Application",
      githubUrl: "https://github.com/yogesh-aggarwal/almater",
      projectUrl: "https://github.com/yogesh-aggarwal/almater/releases",
      technologies: [
        "Angular",
        "Firebase",
        "Electron",
        "Management",
        "TypeScript",
      ],
    },
    {
      name: "Medium Cart",
      description:
        "Website for Anime Fans where they can enjoy their favorite Anime Series. Desktop Application",
      githubUrl: "https://github.com/yogesh-aggarwal/medium-cart-django",
      projectUrl:
        "https://github.com/yogesh-aggarwal/medium-cart-django/releases",
      technologies: [
        "Django",
        "Payment Gateway",
        "PayTM",
        "SQLite",
        "ORM",
        "Python",
      ],
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
