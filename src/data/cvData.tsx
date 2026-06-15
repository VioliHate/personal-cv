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
    "Profondamente appassionato di tecnologia in tutte le sue forme. Mi piace esplorare e imparare nuovi stack e framework: anche quando non li conosco, riesco a capirli e a usarli in modo decente in tempi rapidi.\n" +
    "Nella vita quotidiana ho la scrivania sempre in disordine perché mi rilassa, creo meme su praticamente tutto e sono abbastanza ironico. Mi diverto a spiegare concetti complessi anche con esempi scemi, perché secondo me è il modo più efficace per farli entrare in testa davvero.",
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
      technologies: [
        "Angular",
        "TypeScript",
        "Bootstrap 5",
        "GitHub",
        "RxJS",
        "NgRx",
      ],
      description: [
        "Operato in qualità di Lead Front-End coordinando le attività del team di sviluppo, supervisionando lo stato dell'avanzamento tecnico e ottimizzando i processi di delivery applicativa.",
        "Gestione end-to-end del workflow di sviluppo tramite GitHub, occupandosi della pianificazione strategica dei rilasci e dell'esecuzione sistematica delle code review per garantire la massima qualità del codice.",
        "Pianificazione e implementazione delle feature richieste seguendo rigorosamente i flussi della metodologia Agile per garantire rilasci incrementali e stabili.",
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
        "CSS3",
      ],
      description: [
        "Implementazione delle feature richieste e sviluppo delle logiche di business core per le piattaforme web enterprise GoSign5 ed Eye4Task.",
        "Miglioramento complessivo delle interfacce UI/UX, curando la realizzazione dei layout e delle viste front-end secondo i moderni schemi e requisiti di accessibilità del software.",
        "Attività quotidiana di bug fixing mirato e ottimizzazione prestazionale dei componenti applicativi.",
        "Attività di ricerca, sviluppo e formazione tecnica continua sulle evoluzioni del panorama frontend, con focus mirato sull'integrazione di React e moduli WebAssembly.",
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
        "Git",
      ],
      description: [
        "Sviluppo full-stack del software proprietario SpinApp, partecipando attivamente alla realizzazione delle feature richieste lungo l'intero ciclo di vita del prodotto.",
        "Implementazione delle logiche di back-end complesse in Java e Spring Boot, assicurando la corretta integrazione con la persistenza dati e la corrispettiva esposizione verso l'interfaccia utente in Angular.",
        "Completamento di un percorso di training intensivo on-the-job focalizzato sulla progettazione e sul funzionamento di architetture software enterprise.",
      ],
    },
  ],
  outWorkExperience: [
    {
      id: 0,
      role: "Software Developer Trainee",
      name: "InfoPower Research",
      period: "Dicembre 2018 – Febbraio 2019",
      technologies: [],
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
      technologies: [],
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
      technologies: [],
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
      technologies: [],
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
      technologies: [],
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
      technologies: [],
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
      technologies: [],
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
      technologies: [],
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
  languages: [
    { name: "Italiano", level: "Madrelingua" },
    { name: "Inglese", level: "Intermedio (B1)" },
  ],
};
