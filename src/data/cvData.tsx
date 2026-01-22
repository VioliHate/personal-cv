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
      period: "set 2023 - apr 2024",
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
      period: "mag 2021 - mag 2023",
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
      period: "mag 2019 - mag 2021",
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
      role: "Technical Designer e Developer",
      name: "GameForge Unical (Open Workshop)",
      period: "nov 2025 – Presente",
      description: [
        "Progettazione tecnica del progetto 'Opus Deceptio' in Unity.",
        "Integrazione di sistemi, gameplay logic e componenti AI.",
        "Coordinamento tecnico tra team creativi e sviluppatori.",
        "Ottimizzazione delle performance, modularità e scalabilità del codice.",
      ],
    },
    {
      id: 2,
      role: "Game Developer & Game Designer",
      name: "Global Game Jam – 'BubbleNap'",
      period: "gen 2025",
      description: [
        "Vincitori del premio 'Miglior Gioco' della Global Game Jam 2025 (jam site locale).",
        "Sviluppo di un gioco completo in 48 ore, realizzato in Java puro senza l'uso di framework esterni.",
        "Implementazione delle logiche di gameplay, gestione delle collisioni e integrazione degli asset.",
        "Collaborazione agile in un team multidisciplinare sotto scadenze strette.",
      ],
    },
    {
      id: 3,
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
