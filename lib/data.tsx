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
			link: "https://www.youtube.com/@ProgrammingWithYogesh6752",
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
			link: "https://vipstcerp.web.app",
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
			title: "Common React Toolkit",
			description:
				"The project increases the performance of the react application by `43%` (acc. to google chrome's native profiler) and facilitate `seamless caching`. It started off as being an implementation for common react functions along with a unique approach to `global state management` leveraging the principles of `reactive programming`. Later on, it was expanded to a complete toolkit for react in form of an npm package for developers to make their development process `easier and faster`. The toolkit is currently being used by `over 500+ developers` as well as various proprietary projects and crossed `over 15k+ downloads` since its launch.",
			image: "/common-react-toolkit-banner.webp",
			link: "https://www.npmjs.com/package/common-react-toolkit",
			tags: [
				"15k+ downloads",
				"500+ developers",
				"React",
				"State Management",
				"Reactive Programming (RX)",
				"DX",
			],
		},
		{
			title: "SQL Tools",
			description:
				"Python package aimed at the `developer ring` to focus on their business logic by abstracting away all of the connection and `data parsing` headaches from the developer front resulting in a `low-thought`, `high-performant` `database handling` code. The project utilizes state-of-the-art tools such as `numpy` to parse data to-and-fro from the database. It also features functionality to work with `multiple databases concurrently` posing safety in `multithreaded environments`. It's currently used by over `2k+ developers` and has crossed over `70k+ downloads` since its launch.",
			image: "/sql-tools-banner.webp",
			link: "https://pypi.org/project/sql-tools",
			tags: [
				"70k+ downloads",
				"2k+ developers",
				"Python 3.6+",
				"SQL",
				"SQLite",
				"MySQL",
				"Oracle SQL",
				"Numpy",
				"Data processing",
			],
		},
		{
			title: "Wentz",
			description:
				"It's a web application solely developed by me and powered by `firebase`, `react`, & `common-react-toolkit` developed as part of an in-house hackathon conducted by my institute for the purpose of selecting students for the `ERP development team` (later named `Manthan ERP` as mentioned in the experiences). It features utility for the institute to manage and conduct events in their specified auditoriums where the faculties can request events to the dean (coordinator) & the coordinator will be having a choice to either accept or reject the request. The collision detection is done beforehand to reduce coordinator's headaches.",
			image: "/wentz-banner.webp",
			link: "https://project-wentz.web.app/",
			tags: [
				"Built in 29 hours",
				"Hackathon",
				"ERP",
				"Firebase",
				"React",
				"Common React Toolkit",
				"Event Management",
				"Institute Management",
			],
		},
		{
			title: "Self Driving Car",
			description:
				"The project features a lane-detection algorithm utilizing `OpenCV` and `Python` to detect lanes on the road and then using `PID` control to keep the car in the lane. The project was a great learning experience for me as it helped me understand the core concepts of `Computer Vision` and `Control Systems`.",
			image: "/self-driving-car-banner.webp",
			link: "https://github.com/yogesh-aggarwal/self-driving-project",
			tags: ["Python", "OpenCV", "Computer Vision", "Lane Detection", "PID"],
		},
		{
			title: "Folder Prettifier",
			description:
				"Cross-Platform desktop application specifically tailored for all those people who need to manage their folders within only 1-click. This application provides you all the operations that one need to manage the folders easily & beautifully.",
			image: "/folder-prettifier-banner.webp",
			link: "https://github.com/yogesh-aggarwal/folder-prettifier",
			tags: ["WinForms", "C#", "Visual Studio 2019"],
		},
		{
			title: "Squid X",
			description:
				"This project is developed as part of the `IIT-Goa's Hackoverflow Hackathon` 2021 developed under `36 hours`. It's used to simulate `Squid Game's` theme where the dashboard is meant for the Front man to manage and control the game through various operations such as proceeding to the next game, eliminating a player, etc. The project is developed using `Angular` for the front-end and `NodeJS` for the back-end. It utilizes `GraphQL` for the communication between the front-end and back-end and `express` for authentication.",
			image: "/squid-x-banner.webp",
			link: "https://github.com/yogesh-aggarwal/squid-x",
			tags: [
				"Under 36 hours",
				"Hackoverflow hackathon",
				"Angular",
				"NodeJS",
				"GraphQL",
				"Express",
			],
		},
		{
			title: "Instagram Reels Creator",
			description:
				"This project lets you create Instagram Reels using your own images and videos in an automated manner. It puts text on the images and videos and then stitches them together to create a video. The project is developed using `Python` and `moviepy` library. It can also add music to the video.",
			image: "/instagram-reels-creator-banner.webp",
			link: "https://github.com/yogesh-aggarwal/instagram-reels-creator",
			tags: [
				"Python",
				"Moviepy",
				"Instagram Reels",
				"Image Processing",
				"Video Processing",
				"Automation",
				"Social Media",
			],
		},
		{
			title: "Thoughts App",
			description:
				"`Thoughts` is a `flutter` based mobile application powered by `firebase` as the serverless backend is made out of personal need of capturing my thoughts throught the day to create a `diary` in the end. This project has helped me personally to get a reflection on my day and has helped me in my personal growth. The app is newly launched & is currently being listed on the `Google Play Store`. The app is kept really simple and minimalistic to keep the focus on the thoughts rather than on the fancy features. Right now, I am working on the `Gen AI` aspect of it that let user automatically get a diary page generated for them based on their thoughts throught the days or weeks or months.",
			image: "/thoughts-app-banner.webp",
			link: "https://play.google.com/store/apps/details?id=in.yogeshaggarwal.thoughts",
			tags: [
				"Flutter",
				"Firebase",
				"Firestore",
				"Google Play Store",
				"Diary",
				"Personal Growth",
				"Reflection",
			],
		},
		{
			title: "Fanatic",
			description:
				'`Fanatic` is a `web application` developed using `Angular` and `Firebase` as the backend. The application is a `video streaming platform` for `anime lovers` where they can watch their favorite `anime series & movies` all powered by a smart `recommendation system`. The application also features a `gem 💎` system that lets users award titles with their earned gems. These gems are given to users as a reward of watching on the platform. In the backend it utilizes various strong python `web scrappers` to get data from various other websites. This project was made for the learning purpose of a platform is created and how webscrapping works at a large scale. `"The credit of the video owners are duly mentioned in the series and I hold absolutely no gurantee or rights of the content shown on the platform."`',
			image: "/fanatic-banner.webp",
			link: "https://anime-fanatic.web.app",
			tags: [
				"Angular",
				"Firebase",
				"Firestore",
				"Anime",
				"Gem 💎",
				"Gamification",
				"Video Streaming",
				"Recommendation System",
			],
		},
		{
			title: "Memo Messenger",
			description:
				"`Flutter` based `cross-platform` application for chatting with friends. It features `end-to-end encryption` and a beautiful UI. The project initially started off as a basic room chatting application for learning how these `real-time` applications work but later evolved into a `full-fledged messenger` application. It utilizes `firebase`'s `firestore`'s real-time database for chatting and `firebase`'s storage for storing media files. The project also features a custom-built end-to-end encryption system for securing the messages.",
			image: "/memo-messenger-banner.webp",
			link: "https://github.com/yogesh-aggarwal/memo-messenger",
			tags: [
				//
				"Dart",
				"Flutter",
				"Firebase",
				"RxDart",
				"End-to-end encryption",
				"Firestore",
				"Firebase Storage",
			],
		},
		// {
		// 	title: "Beautify App",
		// 	description:
		// 		"Cross-Platform desktop application specifically tailored for all those people who need to manage their folders within only 1-click. This application provides you all the operations that one need to manage the folders easily & beautifully.",
		// 	image: "/beautify-app-banner.webp",
		// 	link: "https://github.com/yogesh-aggarwal/beautify",
		// 	tags: ["WinForms", "C#", "Visual Studio 2019"],
		// },
		// {
		// 	title: "Falcon QnA",
		// 	description:
		// 		"Cross-Platform desktop application specifically tailored for all those people who need to manage their folders within only 1-click. This application provides you all the operations that one need to manage the folders easily & beautifully.",
		// 	image: "https://bit.ly/2HPhEqg",
		// 	link: "https://github.com/yogesh-aggarwal/folder-prettifier",
		// 	tags: ["WinForms", "C#", "Visual Studio 2019"],
		// },
	]
}
