export const projects: {
  route: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  isWIP?: boolean;
}[] = [
  {
    route: "/epub-editor",
    title: "Mini Epub Editor",
    description:
      "A web application that allows you to upload an epub and change it's metadata: title, author and cover.",
    imageUrl: "some",
    link: "https://github.com/martaccferreira/mini-epub-editor",
  },
  {
    route: "/crabigateur-api",
    title: "Crabigateur Api",
    description:
      "Backend for Crabigateur: an app that uses SRS (Spaced Repetition System) to learn and memorize french vocabulary.",
    imageUrl: "some",
    link: "https://github.com/martaccferreira/crabigateur-api",
  },
  {
    route: "/crabigateur-ui",
    title: "Crabigateur UI",
    description:
      "Frontend for Crabigateur: allows user to seamlessly learn, review and check progress in their french vocabulary!",
    imageUrl: "some",
    link: "https://github.com/martaccferreira/crabigateur-web",
    isWIP: true,
  },
  {
    route: "/olx",
    title: "Working at OLX",
    description:
      "Read in more depth about what sort of work I did at OLX Group across different teams and different domains.",
    imageUrl: "some",
  },
];
