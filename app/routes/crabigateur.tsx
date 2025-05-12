import {
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  Box,
  Grid,
  Chip,
  Stack,
} from "@mui/material";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import ChatBubble from "~/components/chat-bubble";

import {
  styled,
  Tooltip,
  tooltipClasses,
  type TooltipProps,
} from "@mui/material";
import { TechStack } from "~/components/tech-stack";
import { ProjectCarousel } from "~/components/project-carousel";
import { projects } from "~/components/projects";
import { crabigateurImages } from "assets/crabigateur";

const pageName = "crabigateur";

export default function Crabigateur() {
  return (
    <Container>
      <Header currentPage={pageName} />

      <Container>
        <Typography variant="h2" sx={{ paddingTop: 12 }}>
          Crabigateur <Chip label="Personal Project" color="primary" />
        </Typography>
        <Typography variant="body1" sx={{ width: "45vw", py: 2 }}>
          Crabigateur is a{" "}
          <ThemedTooltip title="A learning technique that spaces reviews out over time to optimize memory retention.">
            <span
              style={{ textDecoration: "underline dotted", cursor: "help" }}
            >
              Spaced Repetition System
            </span>
          </ThemedTooltip>{" "}
          app modeled closely after WaniKani—a tool that massively pushed my
          Japanese from lower-intermediate to intermediate-advanced.
          Unfortunately, WaniKani only offers Kanji and Japanese vocabulary, but
          I wanted to apply their system to other languages, too.
        </Typography>
        <Typography variant="body1" sx={{ width: "45vw", py: 2 }}>
          I tried other SRS apps, of course—there's a plethora of them, after
          all. But they all had quirks I didn’t love: vague leveling, no
          typing-based input (just flashcards), or unclear progression. I
          created Crabigateur to fix that—for my current French studies, and
          potentially any language or topic I want to take on in the future.
          (I'd love to use this for{" "}
          <ThemedTooltip
            title="Japanese four-character idioms or phrases. They are used to convey a specific meaning or concept in a concise way. 
            E.g. 七転八起 (shichiten hakki) meaning fall down seven times, stand up eight."
          >
            <span
              style={{ textDecoration: "underline dotted", cursor: "help" }}
            >
              Yojijukugo
            </span>
          </ThemedTooltip>{" "}
          next!)
        </Typography>
        <Box sx={{ padding: 4 }} aria-hidden="true" />
        <Box
          component="img"
          sx={{ width: "100%", boxShadow: 5, borderRadius: 3 }}
          alt="Crabigateur showcase page"
          src={crabigateurImages.Showcase}
        />
        <Box sx={{ padding: 6 }} aria-hidden="true" />
        <ChatBubble
          align="right"
          messages={[
            "I’d love to say the name was a *purposefully* bad translation of WaniKani.",
            'But the truth is, I didn’t realize "alligateur" 🐊 isn’t actually French until much later—and GPT didn’t bother correcting me, probably because this faux-French makes for a quirky name. 🤦🏻‍♀️',
            "I guess that’s fair.",
          ]}
        />
        <Typography variant="h4" sx={{ paddingTop: 16 }}>
          Tech Stack
        </Typography>
        <Grid container spacing={8} sx={{ my: 2 }}>
          <Grid>
            <Typography variant="subtitle1">Frontend</Typography>
            <TechStack stack={["Remix", "Typescript", "Tailwind CSS"]} />
          </Grid>
          <Grid>
            <Typography variant="subtitle1">Backend</Typography>
            <TechStack stack={["Go", "PostgreSQL", "Docker"]} />
          </Grid>
        </Grid>
        <Typography variant="body1" sx={{ width: "45vw", py: 2 }}>
          This stack wasn’t chosen for elegance—it was chosen to learn. My goal
          with this project, beyond building a tool I wanted to use, was to dig
          into Remix and finally get real hands-on experience with Go. My day
          job doesn’t give me much room for fullstack work, so if I wanted to
          explore Golang properly, I had to do it on my own. Is this the most
          conventional tech stack? Definitely not. But the awkwardness was worth
          it for the amount I’ve learned.
        </Typography>
        <Typography variant="body1" sx={{ width: "45vw", py: 2 }}>
          SQL was the one deliberate choice: I needed a flexible, relational
          database, and Postgres felt like the right mix of power and
          familiarity. Docker made it easy to keep things swappable.
        </Typography>
        <Typography variant="h4" sx={{ paddingTop: 16 }}>
          Development Plan
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          <strong>1st Version: the MVP</strong>
        </Typography>
        <Typography variant="body1">
          The foundation. Just a lesson system and a review system. I started
          backend-first, designing a flexible database schema so I could swap in
          different languages or topics. Then I moved to Remix to build the
          lesson and review UI.
        </Typography>
        <Box sx={{ overflowY: "scroll" }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}`}
                  src={`${item.img}`}
                  alt={item.title}
                />
                <ImageListItemBar title={item.title} position="below" />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <ChatBubble
          align="left"
          size="normal"
          messages={[
            "Admittedly, not my best UI design. But pretty things are so time consuming to build without a UI lib behind 💔",
          ]}
        />
        <Grid container spacing={8} sx={{ my: 2 }}>
          <Grid size={6}>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>2nd Pass: the WIP</strong>
            </Typography>
            <Typography variant="body1">
              I’m now refactoring to better leverage Remix’s server-centric
              model. I’ve added a review summary, user stats (like current level
              and word progress), and endpoints for creating/editing/deleting
              cards—so I don’t have to manually poke the DB.
            </Typography>
            <Typography variant="body1">
              Backend work is mostly done. Now working through the frontend
              update.
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>3rd Pass: the Future</strong>
            </Typography>
            <Typography variant="body1">
              Users and authentication! The DB is already multi-user friendly,
              and all endpoints take a `userId`—currently hardcoded to `1`.
              Functionality came first so I could start reviewing words ASAP,
              but next is letting real users (like future me) sign in.
            </Typography>
          </Grid>
        </Grid>
        <ChatBubble
          align="right"
          size="normal"
          messages={[
            "Security who? It’s just me for now. But I’ll hash passwords.",
            "Probably.",
          ]}
        />

        <Box sx={{ padding: 3 }} aria-hidden="true" />
        <Typography variant="h4" sx={{ paddingTop: 16 }}>
          Pain Points
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontSize: "1rem", mt: 2 }}
          color="primary.main"
        >
          remix is not copy-paste react
        </Typography>
        <Typography variant="body1">
          Which is fairly obvious, but I didn't actually look into Remix with
          proper depth (I was under the impression it would be similar to
          NextJS's SSR) until I'd already built the backend MVP with a frontend
          mindset. Initially, I fetched all reviews at once and tracked answers
          using `useState`. That worked, but it didn’t reflect what Remix was
          built for. So I rewrote the flow to fetch and render one review at a
          time—pure server logic.
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Box sx={{ width: "45vw" }}>
            <Typography
              variant="h1"
              sx={{ fontSize: "1rem", mt: 2 }}
              color="primary.main"
            >
              backend: building from scratch
            </Typography>
            <Typography variant="body1">
              It was my first backend ever. I aimed for an onion
              architecture—API, service, database—but probably ended up with a
              shallot. Some service logic bled into the API layer, which isn’t
              ideal. I’ve cleaned up most of it, but I’d definitely be more
              deliberate next time.
            </Typography>
          </Box>
          <ChatBubble
            align="left"
            size="normal"
            messages={[
              "I spent a whole night googling “clean architecture go” and crying softly, until I finally realized I couldn't research forever and had to implement for it to click.",
            ]}
          />
        </Stack>

        <Box sx={{ padding: 6 }} aria-hidden="true" />
        <Typography variant="h4" sx={{ paddingTop: 16 }} align="center">
          The End?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }} align="center">
          Crabigateur is a work in progress, and will probably be even after I
          conclude my currently planned third stage. It's an experiment in tech,
          language, and patience.
        </Typography>
        <ChatBubble
          align="left"
          messages={[
            "That's why who knows?",
            "It sounds like a pretty good app to extend to mobile as an excuse to try React Native next",
          ]}
        />
      </Container>

      <Box sx={{ padding: 16 }} aria-hidden="true" />
      <Typography variant="h2" sx={{ fontSize: "2.5rem" }}>
        Check out other Projects
      </Typography>
      <ProjectCarousel
        projects={projects.filter((project) => project.id !== pageName)}
      />

      <Footer />
    </Container>
  );
}

const ThemedTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.primary.main,
  },
}));

const itemData = [
  { img: crabigateurImages.DB, title: "Database ER Diagram" },
  {
    img: crabigateurImages.Homescreen,
    title: "MVP Home Screen; no stats yet :( ",
  },
  {
    img: crabigateurImages.Verb,
    title: "Lesson Page, current lesson items listed above",
  },
  {
    img: crabigateurImages.Settings,
    title: "Review settings with drag and drop sortable options.",
  },
  {
    img: crabigateurImages.Review,
    title: "Review Page: answer in French!",
  },
];
