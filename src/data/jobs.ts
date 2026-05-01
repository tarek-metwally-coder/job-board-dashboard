import placeholderlogo from "../assets/hero.png" 
export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  logo: string;
};

export const jobs: Job[] = [
  {
    id: "1",
    title: "Frontend Engineer",
    company: "Spotify",
    location: "Stockholm, Sweden",
    description: "React + TypeScript frontend development",
    logo: placeholderlogo,
  },
  {
    id: "2",
    title: "QA Automation Engineer",
    company: "Klarna",
    location: "Stockholm, Sweden",
    description: "Playwright automation and testing",
    logo: placeholderlogo,

  },
  {
    id: "3",
    title: "React Developer",
    company: "Volvo",
    location: "Gothenburg, Sweden",
    description: "UI dashboard development",
    logo: placeholderlogo,

  },
];