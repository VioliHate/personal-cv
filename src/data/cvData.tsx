import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { CVData } from "../types/interfaces";

export const cvData: CVData = {
  personal: {
    name: "Domenico Violi",
    role: "Front-end Developer",
    photo: "/ttttt.jpg",
    description:
      "Sviluppatore Front End laureato in Informatica, con esperienza nello sviluppo di applicazioni web moderne. Ho lavorato principalmente con Angular e coltivo il mio interesse studiando e utilizzando anche React. Animato da una spiccata curiosità tecnologica e da un approccio orientato al miglioramento continuo, affronto le sfide complesse come opportunità di crescita. Credo che il progresso passi anche dagli errori: ogni bug risolto è un passo avanti nella qualità del codice e del prodotto.",
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
    "Angular",
    "React",
    "TypeScript",
    "Bootstrap",
    "Tailwind CSS",
    "HTML5 & CSS3",
    "Git",
    "Node.js",
    "Java",
    "C#",
    "C++",
    "Unity",
  ],
  workExperience: [
    {
      id: 1,
      role: "Middle developer",
      company: "Twentyfive25",
      period: "Set 2023 - Apr 2024",
      description: [
        "Sviluppo Web e realizzazione interfacce in Angular.",
        "Tech Lead del team Front-End.",
        "Supervisione del workflow di sviluppo e gestione rilasci su GitHub.",
      ],
    },
    {
      id: 2,
      role: "Junior FE Developer",
      company: "Eco-Mind Ingegneria Informatica",
      period: "Mag 2021 - Mag 2023",
      description: [
        "Sviluppo WebApp GoSign5 & Eye4Task (Angular): Implementazione feature e logiche FE.",
        "Manutenzione correttiva (Bug Fixing) e ottimizzazione UI.",
        "Formazione Tecnica: Aggiornamento su React e WebAssembly.",
      ],
    },
    {
      id: 3,
      role: "Software Developer",
      company: "Omnia Rebus Solutions",
      period: "Mag 2019 - Mag 2021",
      description: [
        "Training on-the-job sulle tecnologie core: Java, Spring Boot, Angular, PostgreSQL e workflow Git/Maven.",
        "Sviluppo Full Stack per la piattaforma 'SpinApp', curando l'intero ciclo di vita del software.",
        "Implementazione di logiche Back-End complesse e relativa visualizzazione Front-End.",
      ],
    },
  ],
  outWorkExperience: [
    {
      id: 1,
      role: "Full Stack Developer",
      name: "VURPE – Smart BPM Dashboard'",
      period: "Feb 2026 - Presente",
      description: [
        "Progettazione e sviluppo di piattaforma enterprise per analisi dati business con approccio ibrido ML + Rules Engine.",
        "Clean Architecture con RESTful API, async task processing e aggiornamenti real-time via WebSocket.",
        "Implementazione pipeline di CSV ingestion con validazione avanzata ed error handling granulare.",
        "Sviluppo di rules engine configurabile per risk assessment automatico.",
        "Dashboard interattiva con visualizzazioni real-time (tabelle, grafici, metriche aggregate).",
        "Stack: Spring Boot 3.x, PostgreSQL, Flyway, Spring Data JPA, Angular 21, TypeScript, RxJS, JUnit, Mockito, Docker.",
      ],
    },
    {
      id: 2,
      role: "Full Stack Developer",
      name: "Cignalottu – barbering e-commerce & training platform ",
      period: "Fen 2026 - Presente",
      description: [
        "Sviluppo di piattaforma e-commerce per prodotti da barbiere e corsi di formazione professionale.",
        "Architettura Clean Architecture con RESTful API e separazione strutturata dei layer applicativi.",
        "Autenticazione e autorizzazione tramite JWT e OAuth2 con login tradizionale e accesso via Google.",
        "Gestione ambienti dev e prod con configurazione dedicata.",
        "Testing backend con JUnit e property-based testing (jqwik) per validazione e robustezza del JWT.",
        "Stack: Angular 21, Spring Boot 3.x, Spring Data JPA, H2 embedded in-memory, Maven, Tailwind CSS.",
      ],
    },
    {
      id: 3,
      role: "Sound Designer",
      name: "Global Game Jam – 'Mask or Die'",
      period: "Gen 2026",
      description: [
        "Secondi classificati per il premio 'Miglior Gioco' e il premio 'Miglior Gameplay' della Global Game Jam 2026 (jam site locale).",
        "Sviluppo di un gioco completo in 48 ore",
        "Sound design completo: composizione musicale e creazione di effetti vocali tramite FL Studio, inclusi recording ed editing audio.",
        "Collaborazione agile in un team multidisciplinare sotto scadenze strette.",
      ],
    },
    {
      id: 4,
      role: "Technical Designer e Developer",
      name: "GameForge Unical (Open Workshop)",
      period: "Nov 2025 – Presente",
      description: [
        "Progettazione tecnica del progetto 'Opus Deceptio' in Unity.",
        "Integrazione di sistemi, gameplay logic e componenti AI.",
        "Coordinamento tecnico tra team creativi e sviluppatori.",
        "Ottimizzazione delle performance, modularità e scalabilità del codice.",
      ],
    },
    {
      id: 5,
      role: "Game Developer & Game Designer",
      name: "Global Game Jam – 'BubbleNap'",
      period: "Gen 2025",
      description: [
        "Vincitori del premio 'Miglior Gioco' della Global Game Jam 2025 (jam site locale).",
        "Sviluppo di un gioco completo in 48 ore, realizzato in Java puro senza l'uso di framework esterni.",
        "Implementazione delle logiche di gameplay, gestione delle collisioni e integrazione degli asset.",
        "Collaborazione agile in un team multidisciplinare sotto scadenze strette.",
      ],
    },
    {
      id: 6,
      role: "Software Developer Trainee",
      name: "InfoPower Research ",
      period: "Dic 2018 - Feb 2019",
      description: [
        "Sviluppo dell'applicazione multipiattaforma 'SPINApp' come progetto di tesi (tirocinio curriculare di 150 ore).",
        "Sviluppo del Front-End in Ionic e interventi sul Back-End Java pre-esistente (estensione funzionalità mancanti e bug fixing).",
        "Apprendimento pratico della metodologia Agile e integrazione nel workflow di sviluppo aziendale.",
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
