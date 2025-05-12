import EpubCover from "assets/epub-editor/cover.png";
import CrabigateurApiCover from "assets/crabigateur/api-cover.png";
import CrabigateurWebCover from "assets/crabigateur/web-cover.png";
import OlxCover from "assets/olx/cover.jpg";

export type Project = {
  id: string;
  route: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  isWIP?: boolean;
};

export const projects: Project[] = [
  {
    id: "epub-editor",
    route: "/epub-editor",
    title: "Mini Epub Editor",
    description:
      "A web application that allows you to upload an epub and change it's metadata: title, author and cover.",
    imageUrl: EpubCover,
    link: "https://github.com/martaccferreira/mini-epub-editor",
  },
  {
    id: "crabigateur",
    route: "/crabigateur",
    title: "Crabigateur Api",
    description:
      "Backend for Crabigateur: an app that uses SRS (Spaced Repetition System) to learn and memorize French vocabulary.",
    imageUrl: CrabigateurApiCover,
    link: "https://github.com/martaccferreira/crabigateur-api",
  },
  {
    id: "crabigateur",
    route: "/crabigateur",
    title: "Crabigateur UI",
    description:
      "Frontend for Crabigateur: allows user to seamlessly learn, review and check progress in their French vocabulary!",
    imageUrl: CrabigateurWebCover,
    link: "https://github.com/martaccferreira/crabigateur-web",
    isWIP: true,
  },
  {
    id: "olx",
    route: "/olx",
    title: "Working at OLX",
    description:
      "Read in more depth about what sort of work I did at OLX Group across different teams and different domains.",
    imageUrl: OlxCover,
  },
];
