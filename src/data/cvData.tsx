import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { CVData } from "../types/interfaces";

export const cvData: CVData = {
  personal: {
    name: "Domenico Violi",
    role: "Frontend Developer \n Full-Stack",
  },
  contact: [
    {
      icon: <Mail size={18} />,
      text: "dome.violi90@gmail.com",
      link: "mailto:dome.violi90@gmail.com",
    },
    { icon: <Phone size={18} />, text: "+39 320 794 3614" },
    { icon: <MapPin size={18} />, text: "Catanzaro, Italia" },
    {
      icon: <FaLinkedin size={18} />,
      text: "Domenico Violi",
      link: "https://www.linkedin.com/in/domenico-violi-088983183/",
    },
    {
      icon: <FaGithub size={18} />,
      text: "VioliHate",
      link: "https://github.com/VioliHate",
    },
  ],
  summary:
    "Full Stack Developer con 6 anni di esperienza, specializzato in Angular e React. " +
    "Progettazione e sviluppo di soluzioni enterprise con Spring Boot e Clean Architecture.\n" +
    "Tech Lead FE e game developer premiato alla Global Game Jam.",
  skills: [
    {
      title: "FRONTEND",
      skills: [
        "Angular",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap",
        "HTML5 & CSS3",
        "RxJS",
      ],
    },
    {
      title: "BACKEND & DEVOPS",
      skills: [
        "Spring Boot",
        "Spring Data JPA",
        "PostgreSQL",
        "Flyway",
        "Java",
        "Node.js",
        "Docker",
        "JUnit",
        "Mockito",
      ],
    },
    {
      title: "GAME DEV & ALTRO",
      skills: ["Unity", "C#", "C++", "Git", "FL Studio"],
    },
  ],
  workExperience: [
    {
      id: 1,
      role: "Middle Developer",
      company: "Twentyfive25",
      period: "Settembre 2023 – Aprile 2024",
      description: [
        "Progettato e sviluppato interfacce utente scalabili in Angular come Tech Lead del team Front-End.",
        "Gestito workflow di sviluppo, code review e rilasci su GitHub.",
        "Supervisionato il processo di delivery e ottimizzato la produttività del team.",
      ],
    },
    {
      id: 2,
      role: "Junior FE Developer",
      company: "Eco-Mind Ingegneria Informatica",
      period: "Maggio 2021 – Maggio 2023",
      description: [
        "Sviluppato feature e logiche di business per WebApp GoSign5 ed Eye4Task in Angular.",
        "Eseguito bug fixing e ottimizzazione UI/UX con significativo miglioramento delle performance.",
        "Aggiornato su React e WebAssembly attraverso formazione tecnica continua.",
      ],
    },
    {
      id: 3,
      role: "Software Developer",
      company: "Omnia Rebus Solutions",
      period: "Maggio 2019 – Maggio 2021",
      description: [
        "Sviluppato full-stack la piattaforma SpinApp seguendo l’intero ciclo di vita del software.",
        "Implementato logiche back-end complesse in Java + Spring Boot e relativa visualizzazione front-end.",
        "Completato training on-the-job su Java, Spring Boot, Angular e PostgreSQL.",
      ],
    },
  ],
  outWorkExperience: [
    {
      id: 0,
      role: "Software Developer Trainee",
      name: "InfoPower Research",
      period: "Dicembre 2018 – Febbraio 2019",
      description: [
        "Sviluppato applicazione multipiattaforma SPINApp come progetto di tesi (150 ore).",
        "Front-end in Ionic + interventi back-end Java e bug fixing.",
        "Apprendimento pratico della metodologia Agile.",
      ],
    },
    {
      id: 1,
      role: "Game Developer & Game Designer",
      name: "Global Game Jam – 'BubbleNap'",
      period: "Gennaio 2025",
      description: [
        "Vincitore premio 'Miglior Gioco' (jam site locale).",
        "Sviluppato gioco completo in 48 ore in Java puro.",
      ],
    },
    {
      id: 2,
      role: "Technical Designer & Developer",
      name: "GameForge Unical (Open Workshop)",
      period: "Novembre 2025 – Presente",
      description: [
        "Progettazione tecnica del progetto 'Opus Deceptio' in Unity.",
        "Integrazione sistemi, gameplay logic, AI e ottimizzazione performance.",
      ],
    },
    {
      id: 3,
      role: "Sound Designer",
      name: "Global Game Jam – 'Mask or Die'",
      period: "Gennaio 2026",
      description: [
        "Secondo classificato 'Miglior Gioco' e 'Miglior Gameplay'.",
        "Sound design completo in 48 ore con FL Studio.",
      ],
    },
    {
      id: 4,
      role: "Front-End Developer",
      name: "Personal-CV",
      period: "Gennaio 2026 – Presente",
      description: [
        "Applicazione React per generazione dinamica e esportazione PDF del curriculum.",
        "Stack: React + TypeScript.",
      ],
    },
    {
      id: 5,
      role: "Full Stack Developer",
      name: "Cignalottu – Barbering E-commerce & Training Platform",
      period: "Gennaio 2026 – Presente",
      description: [
        "Piattaforma e-commerce + corsi professionali con JWT + OAuth2.",
        "Clean Architecture completa.",
        "Stack: Angular 21, Spring Boot 3.x, Tailwind CSS.",
      ],
    },
    {
      id: 6,
      role: "Full Stack Developer",
      name: "VURPE – Smart BPM Dashboard",
      period: "Febbraio 2026 – Marzo 2026",
      description: [
        "Piattaforma enterprise per analisi dati business con ML + Rules Engine.",
        "Clean Architecture, WebSocket e dashboard real-time.",
        "Stack: Spring Boot 3.x, Angular 21, PostgreSQL, Docker.",
      ],
    },
    {
      id: 7,
      role: "Front-End Developer & Trainer",
      name: "Git for Humans – Slides interattive",
      period: "Aprile 2026",
      description: [
        "Presentazione interattiva in React per spiegare Git in modo semplice e visuale.",
        "Utilizzata per due lezioni da 90 minuti ciascuna (tot. 3 ore).",
        "Deploy su Netlify.",
        "Demo live: https://git-for-humans.netlify.app/",
      ],
    },
  ],
  education: [
    {
      id: 1,
      degree: "Laurea Triennale in Informatica",
      school: "UNICAL - Università della Calabria",
      period: "2009 - 2018",
    },
    {
      id: 2,
      degree: "Diploma Scuola superiore, Informatica",
      school: "IITS Ercolino Scalfaro",
      period: "2004 - 2009",
    },
  ],
};
