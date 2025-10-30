import { Experience } from '../models/experience.model';

export const MOCK_EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    role: "Senior Frontend Developer",
    period: "2022 - Presente",
    description: "Sviluppo e manutenzione di applicazioni web complesse utilizzando Angular, TypeScript e RxJS.",
    technologies: ["Angular", "TypeScript", "RxJS", "NgRx"]
  },
  {
    id: 2,
    company: "Web Innovators",
    role: "Junior Web Developer",
    period: "2020 - 2022",
    description: "Creazione di siti web e landing page responsive per clienti di piccole e medie imprese.",
    technologies: ["JavaScript", "HTML5", "CSS3", "jQuery"]
  },
  {
    id: 3,
    company: "Creative Design Studio",
    role: "Web Designer Intern",
    period: "2020",
    description: "Supporto al team di design nella creazione di mockup e prototipi UI/UX.",
    technologies: ["Figma", "HTML5", "CSS3"]
  },
  {
    id: 4,
    company: "Open Source Contributor",
    role: "Developer",
    period: "2019",
    description: "Contributi a vari progetti open source su GitHub, principalmente in ambito JavaScript.",
    technologies: ["JavaScript", "Git", "GitHub"]
  },
  {
    id: 5,
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2018 - 2019",
    description: "Realizzazione di un e-commerce per un cliente locale utilizzando MERN stack (MongoDB, Express, React, Node.js).",
    technologies: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    id: 6,
    company: "Università degli Studi",
    role: "Laurea in Informatica",
    period: "2015 - 2018",
    description: "Corso di laurea triennale con focus su algoritmi, strutture dati e programmazione ad oggetti.",
    technologies: ["Java", "C++", "SQL"]
  }
];
