import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { CVData } from "../types/interfaces";

export const cvData: CVData = {
  personal: {
    name: "Domenico Violi",
    role: "Mobile Developer \n React Native Specialist",
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
  skills: [
    {
      title: "FRONTEND & MOBILE",
      skills: [
        "React Native",
        "Expo",
        "Expo Router",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Angular",
        "RxJS",
      ],
    },
    {
      title: "BACKEND & DEVOPS",
      skills: [
        "Node.js",
        "Spring Boot",
        "Java",
        "PostgreSQL",
        "Docker",
        "EAS Build (Android/iOS)",
        "CI/CD Pipeline",
      ],
    },
    {
      title: "TOOLS & METODI",
      skills: ["Git", "Agile (Scrum)", "Code Review", "UI/UX Design"],
    },
  ],
  workExperience: [
    {
      id: 1,
      role: "Middle Developer",
      company: "Twentyfive25",
      period: "Settembre 2023 – Aprile 2024",
      technologies: [
        "Angular",
        "TypeScript",
        "Bootstrap 5",
        "GitHub",
        "RxJS",
        "NgRx",
      ],
      description: [
        "Operato in qualità di Lead Front-End coordinando un team di sviluppo di 6 persone, ottimizzando i processi di delivery applicativa e supervisionando l'avanzamento tecnico.",
        "Gestione del workflow Git tramite pianificazione strategica dei rilasci ed esecuzione sistematica delle code review per garantire massimi standard di qualità del codice.",
        "Pianificazione e implementazione delle feature seguendo le logiche Agile per assicurare rilasci incrementali stabili.",
      ],
    },
    {
      id: 2,
      role: "Junior FE Developer",
      company: "Eco-Mind Ingegneria Informatica",
      period: "Maggio 2021 – Maggio 2023",
      technologies: [
        "Angular",
        "React",
        "WebAssembly",
        "TypeScript",
        "Bootstrap",
        "Tailwind CSS",
      ],
      description: [
        "Implementazione delle feature e sviluppo delle logiche di business core per le piattaforme web enterprise GoSign5 ed Eye4Task.",
        "Ingegnerizzazione dei layout e delle viste front-end curando l'accessibilità (UI/UX) e l'ottimizzazione prestazionale dei componenti.",
        "Attività continua di bug fixing mirato e ricerca tecnica sull'integrazione di React e moduli WebAssembly.",
      ],
    },
    {
      id: 3,
      role: "Software Developer",
      company: "Omnia Rebus Solutions",
      period: "Maggio 2019 – Maggio 2021",
      technologies: [
        "Java",
        "Spring Boot",
        "Angular",
        "PostgreSQL",
        "Spring Data JPA",
      ],
      description: [
        "Sviluppo full-stack del software proprietario SpinApp, partecipando all'intero ciclo di vita del prodotto.",
        "Implementazione di logiche di back-end in Java/Spring Boot ed esposizione dei dati verso l'interfaccia utente in Angular.",
      ],
    },
  ],
  outWorkExperience: [
    {
      id: 3,
      role: "Lead Mobile Developer",
      name: "Surici – Localized Recipe Selector App",
      period: "2026",
      technologies: [
        "React Native",
        "Expo",
        "Expo Router",
        "Tailwind CSS",
        "EAS Build",
      ],
      description: [
        "Ideazione, progettazione e sviluppo da zero di un'applicazione mobile nativa per la selezione e ricerca di ricette tipiche regionali.",
        "Ingegnerizzazione della logica di ricerca case-insensitive e ottimizzazione delle performance di filtraggio dati su device.",
        "Gestione autonoma del ciclo di sviluppo e rilascio multipiattaforma (Android/iOS/Web) tramite pipeline EAS Build.",
      ],
    },
    {
      id: 2,
      role: "Full Stack Developer",
      name: "VURPE – Smart BPM Dashboard",
      period: "Febbraio 2026 – Marzo 2026",
      technologies: [
        "Angular 21",
        "Spring Boot 3.x",
        "PostgreSQL",
        "WebSocket",
        "Docker",
      ],
      description: [
        "Ideazione e ingegnerizzazione strutturale dell'architettura per un Rules Engine enterprise.",
        "Sviluppo della dashboard ottimizzando la visualizzazione di metriche e grafici in tempo reale tramite WebSocket.",
      ],
    },
    {
      id: 1,
      role: "Front-End Developer & Trainer",
      name: "Git for Humans – Slides interattive",
      period: "Aprile 2026",
      technologies: ["React", "Git", "Netlify", "Interactive Design"],
      description: [
        "Sviluppo di una piattaforma web interattiva in React mirata alla formazione visuale sull'utilizzo di Git, impiegata attivamente durante workshop dedicati.",
        "https://git-for-humans.netlify.app",
      ],
    },
    {
      id: 0,
      role: "Front-End Developer",
      name: "Personal-CV",
      period: "Gennaio 2026 – Presente",
      technologies: ["React", "TypeScript", "Tailwind CSS", "PDF Generation"],
      description: [
        "Applicazione web per la generazione dinamica e l'esportazione automatizzata in PDF del curriculum professionale.",
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
  ],
  languages: [
    { name: "Italiano", level: "Madrelingua" },
    { name: "Inglese", level: "Intermedio (B1)" },
  ],
};
