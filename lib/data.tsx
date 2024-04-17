import {
	Github,
	Instagram,
	Layers,
	Linkedin,
	Mail,
	Twitter,
	Youtube,
} from "lucide-react"
import { Experience_t } from "./types/experience"
import { Project_t } from "./types/project"
import { Publication_t } from "./types/publication"
import { Skill_t } from "./types/skill"
import { Social_t } from "./types/social"

export namespace Data {
	export const socials: Social_t[] = [
		{
			name: "GitHub",
			icon: <Github />,
			link: "https://github.com/yogesh-aggarwal",
		},
		{
			name: "LinkedIn",
			icon: <Linkedin />,
			link: "https://linkedin.com/YogeshDev215",
		},
		{
			name: "Twitter",
			icon: <Twitter />,
			link: "https://twitter.com/YogeshDev215",
		},
		{
			name: "YouTube",
			icon: <Youtube />,
			link: "https://youtube.com/@ProgrammingWithYogesh",
		},
		{
			name: "Instagram",
			icon: <Instagram />,
			link: "https://instagram.com/developer.exe",
		},
		{
			name: "Stack Overflow",
			icon: <Layers />,
			link: "https://stackoverflow.com/users/12077817/yogesh-aggarwal",
		},
		{
			name: "Email",
			icon: <Mail />,
			link: "mailto:yogeshdevaggarwal@gmail.com",
		},
	]

	export const skills: Skill_t[] = [
		{
			title: "Cloud",
			description: "",
			tags: [
				//
				"AWS",
				"GCP",
				"Self-hosting",
				"Firebase",
				"Netlify",
			],
		},
		{
			title: "Database",
			description: "",
			tags: [
				//
				"MongoDB",
				"Firestore",
				"DynamoDB",
				"MySQL",
				"SQLite",
				"PostgreSQL",
				"CacandraDB",
			],
		},
		{
			title: "Dev Ops",
			description: "",
			tags: [
				//
				"Docker",
				"CI/CD Pipelines",
				"Jenkins",
				"GitHub actions",
				"GitLab actions",
			],
		},
		{
			title: "Machine Learning",
			description: "",
			tags: [
				//
				"Tensorflow",
				"Numpy",
				"Pandas",
				"PyTorch",
				"Sci-Kit learn",
			],
		},
		{
			title: "Development",
			description: "",
			tags: [
				//
				"Flutter",
				"React",
				"React Native",
				"WinUI",
				"WinForms",
			],
		},
		{
			title: "Automation",
			description: "",
			tags: [
				//
				"Python",
				"Selenium",
				"Shell automation",
				"User behaviour",
				"Captcha",
				"System tasks",
			],
		},
		{
			title: "Languages",
			description: "",
			tags: [
				//
				"Python",
				"Golang",
				"C++ (of course)",
				"JavaScript/Typescript",
				"Dart",
			],
		},
	]

	export const experiences: Experience_t[] = [
		{
			at: "You Laundry",
			role: "Software Engineer",
			description: "",
			link: "",
			tags: ["Flutter", "Firebase", "Firestore", "Dart"],
			timestamp: "2023",
		},
		{
			at: "You Laundry",
			role: "Software Engineer",
			description: "",
			link: "",
			tags: ["Flutter", "Firebase", "Firestore", "Dart"],
			timestamp: "2023",
		},
	]

	export const publications: Publication_t[] = [
		{
			title: "Women Indepedence",
			description: "",
			link: "",
			tags: ["Flutter", "Firebase", "Firestore", "Dart"],
			timestamp: "2023",
		},
	]

	export const projects: Project_t[] = [
		{
			title: "Fanatic",
			description:
				"Website for Anime Fans where they can enjoy their favorite Anime Series. Desktop Application.",
			image: "https://bit.ly/37tmGmR",
			link: "https://anime-fanatic.web.app/",
			tags: ["Angular", "Firebase", "Firestore"],
		},
		{
			title: "Folder Prettifier",
			description:
				"Cross-Platform desktop application specifically tailored for all those people who need to manage their folders within only 1-click. This application provides you all the operations that one need to manage the folders easily & beautifully.",
			image: "https://bit.ly/2HPhEqg",
			link: "https://github.com/yogesh-aggarwal/folder-prettifier",
			tags: ["WinForms", "C#", "Visual Studio 2019"],
		},
		{
			title: "Expenses Manager",
			description:
				"Simple to use android mobile application that helps you to manage your daily expenses & keep you on budget.",
			image: "https://bit.ly/2JmPdjM",
			link: "https://github.com/yogesh-aggarwal/expenses-manager",
			tags: ["Ionic 5", "Angular", "Firebase", "RxJS"],
		},
	]
}
