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
			role: "Product Lead",
			timestamp: "2023",
			description:
				"Developed the product from ground up and led the team of 3 people. The product is currently being used by over 2000+ users. The project comprised of two flutter mobile applications for customers and delivery agents, a firebase cloud function for notifications, a firebase firestore database for storing data, and a flutter web application for the admin panel.",
			tags: [
				"2000+ users",
				"Dart",
				"Flutter",
				"Firebase FCM",
				"NodeJS",
				"Express",
				"JWT",
				"Provider",
				"Swagger UI",
			],
			link: "https://play.google.com/store/apps/developer?id=YouLaundry",
		},
		{
			at: "Hungryveels",
			role: "Mobile App Engineer",
			timestamp: "2023",
			description:
				"Developed some of the essential feature of the application such as filtering, sorting and efficient search of various cousines. It was a great learning experience to work with the team of 5 people. Together, we also revamped the UX of the application by leveraging flutter's animation capabilities.",
			link: "https://play.google.com/store/apps/details?id=com.hungryveels",
			tags: [
				"10,000+ users",
				"Dart",
				"Flutter",
				"NodeJS",
				"JWT",
				"VelocityX",
				"VAPID Keys",
				"Google Maps API",
				"Razorpay",
			],
		},
		{
			at: "Manthan VIPS ERP",
			role: "Product Lead",
			timestamp: "2022",
			description:
				"Lead a team of 5 people to develop a complete ERP solution for the college. The project comprised of a React web application for the admin panel, a react native mobile application for students, and a flutter mobile application for teachers. It solved the institutes major problems such as attendance, timetable and leave management powered by biometric machinary in-house developed by us. It utilized scheduled edge cloud functions for a variety of tasks such as reporting, biometrics etc. The project was a great success and is currently being used by over 5000+ students & faculties.",
			tags: [
				"5000+ users",
				"React",
				"React Native",
				"Flutter",
				"Firebase",
				"Firestore",
				"NodeJS",
				"Express",
				"Custom Biometric Machinary",
				"Cron Jobs",
				"Edge Computing",
			],
			link: "https://play.google.com/store/apps/developer?id=YouLaundry",
		},
		{
			at: "Cadillac Fair View",
			role: "Landing Page Lead",
			timestamp: "2021",
			description:
				"Revamped the landing page of the website and made it more interactive and user-friendly. The website is currently being used by over 10,000+ users. The landing pages, being of a reputed real-estate brand, required various analytics and tracking features to be implemented. It uses Google Analytics and Google Tag Manager for tracking user behaviour. The website is hosted on a CDN and uses Cloudflare for caching.",
			link: "https://www.cadillacfairview.com/",
			tags: [
				"NextJS",
				"SCSS",
				"CSS Animations",
				"GSAP",
				"React",
				"CDN",
				"Cloudflare",
				"Google Analytics",
			],
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
