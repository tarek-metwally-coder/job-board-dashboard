export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
};

export const jobs: Job[] = [
  {
    id: "1",
    title: "Frontend Engineer",
    company: "Spotify",
    location: "Stockholm, Sweden",
    description: "React + TypeScript frontend development",
  },
  {
    id: "2",
    title: "QA Automation Engineer",
    company: "Klarna",
    location: "Stockholm, Sweden",
    description: "Playwright automation and testing",
  },
  {
    id: "3",
    title: "React Developer",
    company: "Volvo",
    location: "Gothenburg, Sweden",
    description: "UI dashboard development",
  },
];