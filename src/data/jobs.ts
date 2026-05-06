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
    description: "React + TypeScript.\n\nResponsibilities:\n- Build UI\n- Work with APIs\n- Collaborate with team",
    logo: placeholderlogo,
  },
  {
    id: "2",
    title: "QA Automation Engineer",
    company: "Klarna",
    location: "Stockholm, Sweden",
    description: "VeryVeryVeryVeryVeryVeryVeryVeryLongCompanyNameWithoutSpacesPlaywright automation and testing",
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
  {
  id: "4",
  title: "SeniorFrontendPlatformEngineerForEnterpriseAnalyticsInfrastructureAndVisualizationSystems",
  company: "InternationalBusinessMachinesAndCloudInfrastructurePartnersUnlimited",
  location: "RemoteCairoEgyptMiddleEastNorthAfricaRegionWithoutAnySpaces",
  logo: placeholderlogo,
  description:
    "We are looking for a highly experienced frontend engineer with deep expertise in React TypeScript performance optimization rendering pipelines accessibility large scale dashboard architecture design systems microfrontend integration data visualization realtime websocket infrastructure and cross functional collaboration across distributed engineering organizations.We are looking for a highly experienced frontend engineer with deep expertise in React TypeScript performance optimization rendering pipelines accessibility large scale dashboard architecture design systems microfrontend integration data visualization realtime websocket infrastructure and cross functional collaboration across distributed engineering organizations.We are looking for a highly experienced frontend engineer with deep expertise in React TypeScript performance optimization rendering pipelines accessibility large scale dashboard architecture design systems microfrontend integration data visualization realtime websocket infrastructure and cross functional collaboration across distributed engineering organizations."
}
];