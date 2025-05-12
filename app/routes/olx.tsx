import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Box, Typography, Chip } from "@mui/material";
import { Container } from "@mui/system";
import ChatBubble from "~/components/chat-bubble";
import { Header } from "~/components/header";
import { TechStack } from "~/components/tech-stack";
import FaceIcon from "@mui/icons-material/Face";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import { ProjectCarousel } from "~/components/project-carousel";
import { projects } from "~/components/projects";
import { Footer } from "~/components/footer";

const pageName = "olx";

export default function OLXExperience() {
  return (
    <Container>
      <Header currentPage={pageName} />
      <Container>
        <Typography variant="h2" sx={{ paddingTop: 12 }}>
          OLX Group <Chip label="Professional XP" color="primary" />
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, maxWidth: "60ch" }}>
          OLX was my first real professional experience in tech. I worked
          entirely remotely and was embedded in a strong Agile team. We used
          Slack for communication, Jira for task tracking, Confluence and Miro
          for documentation and ceremonies.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: "60ch" }}>
          I started as a Software Engineer Trainee and later transitioned to
          Frontend Engineer as my skills and responsibilities grew. My domain
          changed over time—from Car Parts Monetization to general Car Parts for
          OLX, and finally to Findability.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, flexDirection: "row", mb: 2 }}>
          <Box
            component="img"
            sx={{ width: "50%", boxShadow: 5, borderRadius: 3 }}
            alt="OLX Poland Homepage"
            src={`/assets/${pageName}/olx-home.png`}
          />
          <Box
            component="img"
            sx={{ width: "50%", boxShadow: 5, borderRadius: 3 }}
            alt="Otomoto Homepage"
            src={`/assets/${pageName}/motors-home.png`}
          />
        </Box>
        <Typography
          variant="body2"
          align="center"
          sx={{ width: "50vw", m: "auto" }}
        >
          Homepages for olx.pl and otomoto.pl, the two main platforms I worked
          on. There are domains for these platforms in other European countries,
          but they are all connect back to the same two codebases and my team
          was responsible for Car Parts in both. Traffic averaged 14 million
          users!
        </Typography>
        <Box sx={{ padding: 6 }} aria-hidden="true" />

        <Typography variant="h4">Core Stack</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Working at OLX gave me the chance to explore a wide range of
          technologies. But day to day, these were the main tools:
        </Typography>
        <TechStack
          stack={[
            "React",
            "Typescript",
            "React Router",
            "NextJS",
            "GraphQL",
            "Emotion Styled Components",
            "Jest",
            "AWS",
            "Git",
          ]}
        />

        <Box sx={{ padding: 6 }} aria-hidden="true" />

        <Timeline position="alternate">
          {/* Software Engineer Trainee */}
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography
                variant="h2"
                sx={{ fontSize: "1.25rem" }}
                color="secondary.main"
              >
                Mid 2022
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <FaceIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                variant="h2"
                sx={{ fontSize: "1.5rem" }}
                color="secondary.main"
              >
                Software Engineer Trainee
              </Typography>
              <ChatBubble
                align="right"
                size="normal"
                messages={[
                  "Started out learning the ropes—shadowing my mentor and cramming Golang, React and Git courses on MyAcademy.",
                ]}
              />
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="secondary" sx={{ fontWeight: 600 }}>
              1st Project: Creating a Post-Paid System for Car Parts Sellers
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1">
                Decoupled Payment History Page
              </Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>
                Collaborated with the Payments team to decouple page from legacy
                systems, aligning it with the rest of the OLX platform. This
                unlocked the ability to deploy newer features on the page.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="secondary" sx={{ fontWeight: 600 }}>
              In a pinch!! : Early Challenges
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1">
                Transitioning Without a Mentor
              </Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>
                Just one month into my internship, my mentor transitioned off
                the team and I became the sole Frontend. Without a direct
                replacement, I had to quickly adapt by taking ownership of
                day-to-day tasks while keeping up my learning.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="secondary" sx={{ fontWeight: 600 }}>
              1st Project Continuation and Independent Growth
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1">
                Research-Driven Development
              </Typography>
              <Typography variant="body2" sx={{ mb: 12 }}>
                One key moment was evaluating the use of a federation module to
                display postpaid expenses. After deep technical research, I
                proposed a leaner FE-only alternative, avoiding unnecessary
                complexity and helping guide team decisions more effectively.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Frontend Engineer */}
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography
                variant="h2"
                sx={{ fontSize: "1.25rem" }}
                color="secondary.main"
              >
                Early 2023 - now
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <FaceRetouchingNaturalIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                variant="h2"
                sx={{ fontSize: "1.5rem" }}
                color="secondary.main"
              >
                Frontend Engineer
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Projects as sub-dots under FE */}

          <TimelineItem>
            <TimelineOppositeContent color="secondary" sx={{ fontWeight: 600 }}>
              A New Era: Focus on Experiment Features
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1">
                Fake Doors, A/B Tests & Tracking
              </Typography>
              <Typography variant="body2">
                After wrapping up my first major project, we shifted gears
                toward experiments—think banner promos for package upgrades and
                testing monetizable features for sellers. These were spread out
                across the platform, so I got used to navigating the codebase
                quickly and syncing with multiple owner teams.
              </Typography>
              <ChatBubble
                align="right"
                size="normal"
                messages={[
                  "Each experiment meant diving into a new domain. Thanks to this era, I got used to picking up unfamiliar code quickly.",
                ]}
              />
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="secondary" sx={{ fontWeight: 600 }}>
              2nd Big Project: Export from OLX to Otomoto
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1">
                API Integration Drama & Changes on User Settings Page
              </Typography>
              <Typography variant="body2">
                We needed to let users sync their listings from OLX to Otomoto,
                but OLX’s frontend was client-rendered and couldn’t securely
                call Otomoto’s protected APIs. I proposed using an internal
                GraphQL proxy maintained by another team to forward calls
                server-side—solving the security gap without major refactors.
                Also helped implement the account connection on the frontend.
              </Typography>
              <ChatBubble
                align="left"
                size="normal"
                messages={[
                  "This project was a true melting pot of cross-platform quirks.",
                  "The alternative was building a new proxy from scratch—but by digging through the codebase and uncovering an existing internal server, I saved the team a lot of development time!",
                ]}
              />
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="secondary" sx={{ fontWeight: 600 }}>
              On the Side: Internal Tools
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1">
                Building a Backoffice UI from the Ground Up
              </Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>
                One of the most technical parts of my journey: I set up CI/CD
                pipelines, wrote Terraform for infrastructure, integrated Okta
                for auth, and deployed everything behind a friendly URL. The
                tool helped internal teams manage postpaid pricing and
                onboarding flows.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="secondary" sx={{ fontWeight: 600 }}>
              Code Hygiene & Support
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1">
                Cleanups, Docs & Team Support
              </Typography>
              <Typography variant="body2">
                Took initiative to clean up deprecated features like experiment
                leftovers and outdated flows. Documented key internal setups
                (including internationalization and utility architecture) on
                Confluence, and on request, gave a knowledge sharing session on
                “How to Write Clear Documentation.”
              </Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>
                {" "}
                Actively supported other OLX teams—reviewing MRs, unblocking
                devs, and jumping in on Slack threads when needed.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
      <Box sx={{ padding: 8 }} aria-hidden="true" />
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
