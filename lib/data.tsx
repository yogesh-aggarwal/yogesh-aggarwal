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
			title: "Cloud Engineering",
			description:
				"While I initially used `Firebase` as a standalone backend for my projects, I later expanded to more robust platforms like `AWS` and `GCP` for handling increased complexity. In addition to public cloud services, I've also gotten hands-on experience by `self-hosting` projects on `Digital Ocean VPS` instances as well as tinkering with `bare-metal` servers running on hardware like `Raspberry Pis and Orange Pis` - I love getting into the nitty-gritty when the opportunity arises.",
			tags: [
				//
				"AWS",
				"GCP",
				"Self-hosting",
				"Firebase",
				"Netlify",
				"Digital Ocean",
			],
		},
		{
			title: "Development",
			description:
				"This is quite an interesting one. I have worked with a variety of frontend frameworks and libraries. I started with `Vanilla JS` with `JQuery` back in `2014` and then moved to `Angular 8` initially for most of my projects as its concepts such as services, modules, components felt like natural intuition to me. Later for exploration I moved over to `React` & now it's my primary choice for most of my projects. `NextJS` is my go-to for `SSR & SSG` projects. In the domain of mobile applications, I used to work with `Java` for Android applications but then moved to `Flutter` for cross-platform applications. I have also worked with `React Native` for some of my projects. For desktop applications, I have worked with `WinUI` & `WinForms` for Windows applications. I have also worked with `Electron` for cross-platform desktop applications.",
			tags: [
				//
				"Angular",
				"React",
				"React Native",
				"Flutter",
				"Native Android (Java)",
				"WinUI",
				"WinForms",
				"Electron",
				"NextJS",
				"Tauri",
				"JQuery",
			],
		},
		{
			title: "Database",
			description:
				"My database journey began with `SQLite`, which I used back in `2016` for storing user data in my first `Python Tkinter` project. As I delved deeper into web development, I started leveraging the advanced features of SQL databases like `MySQL`, `PostgreSQL`, and `CassandraDB`. However, with the rise of NoSQL solutions, I initially adopted `MongoDB` and then transitioned to `Firestore` and `DynamoDB` for personal and client projects, drawn by their scalability and ease of use. The variety of database technologies I've worked with has given me a well-rounded perspective on data storage and management.",
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
			title: "DevOps",
			description:
				'For DevOps, I\'ve worked with `Docker`, `Jenkins`, `GitHub Actions` (my preferred CI/CD tool), `GitLab`, and `Bitbucket` Pipelines for automating deployments, even before `"DevOps"` was a buzzword. I have some experience with `Kubernetes` as well. Hosting-wise, I started with `bare-metal servers`, moved to VPSs like `Digital Ocean`, and now frequently leverage `serverless` platforms like `Firebase`, `Netlify`, `Vercel`, and `Heroku` for personal and client projects. The variety of tools and platforms has given me a well-rounded DevOps skillset.',
			tags: [
				//
				"Docker",
				"Kubernetes",
				"Jenkins",
				"Serverless",
				"Digital Ocean",
				"Bare metal",
				"CI/CD Pipelines",
				"GitHub actions",
				"GitLab pipelines",
				"BitBucket pipelines",
			],
		},
		{
			title: "Machine Learning",
			description:
				"My machine learning journey started with `Sci-Kit Learn` and `OpenCV` in `2018`, fascinated by predictive modeling. While still exploring the vast field, I've built projects like `facial recognition` with OpenCV, `chatbots` using `NLTK` and `TensorFlow`, and an AI for Flappy Bird with `Deep Q Learning`. Initially struggling with the math behind models, resources like `3Blue1Brown` and `Andrew Ng`'s courses helped me develop custom models using `PyTorch` and `TensorFlow`. I'm now proficient in data `analytics`, visualization with `NumPy`, `Pandas`, `Matplotlib`, and grasping core ML concepts, though there's always more to learn.",
			tags: [
				//
				"Tensorflow",
				"Numpy",
				"Pandas",
				"Matplotlib",
				"SeaBorn",
				"PyTorch",
				"NLTK",
				"Sci-Kit learn",
				"OpenCV",
				"Deep Q Learning",
			],
		},
		{
			title: "Artificial Intelligence",
			description:
				"I've been diving deep into the world of large language models (`LLMs`) like `GPT-3`, GPT-2, and BERT - both using the handy langchain library and rolling up my sleeves to build custom implementations from the ground up. `OpenAI`'s GPT-3 release was a game-changer that sparked my curiosity to really push the boundaries of what these models can do for real-world problem-solving. That led me to the `Hugging Face` ecosystem, where I've been tinkering with cutting-edge models like `LLaMA2`, `Mistral`, and `Stable Diffusion`, getting hands-on with their core `transformers`, `datasets`, and `diffusers` libraries. These days, I'm particularly excited about uncovering novel applications for OpenAI's newly-launched `GPT-4 assistants` - the potential seems limitless, and I'm determined to be at the forefront of leveraging these AI capabilities in production environments.",
			tags: [
				//
				"OpenAI",
				"Hugging Face",
				"GPT-4",
				"GPT-3",
				"Llama2",
				"Mixtral",
				"Stable Diffusion",
				"transformers",
				"datasets",
				"diffusers",
				"Langchain",
				"Agents",
			],
		},
		{
			title: "Automation",
			description:
				"It all started with needing large datasets for a personal project but not having the budget to procure them. That's when I dove into the world of web scraping, initially using `BeautifulSoup` to extract data from websites before leveling up to `Selenium` & `Puppeteer` for more complex parsing tasks. Data acquisition was just the beginning of my automation journey though. I've also gotten my hands dirty with `shell scripting` for `system-level automation` like `job scheduling`, `cron jobs`, and `disk management` routines. On the web side, I've used Python to automate user interactions and behaviors across websites. One unique area I've tackled is `captcha` solving using creative Python techniques - some tricks that are `uniquely my own`. Overall, I've built expertise in leveraging Python for automating all sorts of system tasks and processes for clients.",
			tags: [
				//
				"Python",
				"Selenium",
				"Puppeteer",
				"Shell automation",
				"User behaviour",
				"Captcha",
				"System tasks",
				"Power Automate",
			],
		},
		{
			title: "Languages",
			description:
				"I've no description for this one. I am a polyglot. I speak many languages. :P.\n Jokes apart, I have worked with a variety of programming languages. I started with `C++` back in `2014` and then moved to `Python` for most of my projects. Nowadays, despite the fact that I use `TypeScript`/`JavaScript` for most of my projects, I still love to code in `C++` when it gets to `\"nerdy stuff\"` & performance-critical applications. In `2021`, I started building servers for my clients with `Golang` and I must say that I am quite impressed with its performance. I've also worked with `Dart` for building mobile applications using `Flutter`.",
			tags: [
				//
				"C++ (of course)",
				"Java",
				"Python",
				"Golang",
				"Typescript/JavaScript",
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
			timestamp: "Springer's ICICC 2024",
			title:
				"Experimental study to analyze the zonal financial independence of women using fuzzy logic.",
			description:
				"This award-winning research paper analyzes the financial status of women in India using fuzzy logic and government data. It reveals significant regional disparities in women's financial independence across different zones of the country. The study provides valuable insights for stakeholders and policymakers to develop targeted interventions aimed at empowering women and addressing socio-economic discrimination, thereby promoting gender equality and financial literacy among women in Indian society.",
			link: "/icicc-2024-best-paper-award.pdf",
			tags: [
				"Best Paper Award",
				"Gender Stereotypes",
				"Financial Independence",
				"Female Feticide",
				"Gender Discrimination",
				"Education",
				"Fuzzy Logic",
				"Data Analysis",
				"Data Visualization",
				"Python",
				"R",
			],
		},
		{
			timestamp: "IJCRT 2023",
			title:
				"Elucidating Gender Discrepancies in Skill Development and Media Consumption During Youth Isolation.",
			description:
				"This study examines the gender-specific effects of COVID-19 lockdowns on students' lifestyles and learning abilities through a cross-sectional survey. The findings reveal that lockdowns had a more detrimental impact on the mental health of female students compared to males. While male students focused on developing technical skills like coding, females pursued creative hobbies. The analysis delves into the impacts on sleep patterns, sedentary behavior, and coping strategies adopted by students during the lockdowns. The paper highlights the gender disparities in how students responded to the lockdown situation, offering valuable insights into the effects on their well-being and learning capabilities during this challenging period.",
			link: "/ijcrt-2023-certificate.pdf",
			tags: [
				"COVID-19",
				"Lockdown",
				"Gender Studies",
				"Student Wellbeing",
				"Mental Health",
				"Learning Abilities",
				"Coping Strategies",
				"Gender Differences",
			],
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
