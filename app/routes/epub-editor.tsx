import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ChatBubble from "~/components/chat-bubble";
import { TechStack } from "~/components/tech-stack";
import { epubEditorImages } from "assets/epub-editor";
import { ProjectPageLayout } from "~/components/project-page-layout";
import { styled } from "@mui/material/styles";

const pageName = "epub-editor";

const ScrollImageList = styled(ImageList)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  marginBottom: theme.spacing(2),
  width: "100%",
  height: 450,
  overflowY: "scroll",
  overflowX: "hidden",

  // Force scrollbar to always be visible (Webkit - Chrome, Safari, including macOS overlay)
  "&::-webkit-scrollbar": {
    display: "block !important", // Force display
    width: "6px !important", // Adjust width as needed
    backgroundColor: "transparent !important", // Optional: Background for the track
    visibility: "visible !important", // Force visibility
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: `${theme.palette.primary.main} !important`, // Adjust color as needed
    borderRadius: 4,
    visibility: "visible !important", // Force visibility
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent !important", // Ensure track is visible
    visibility: "visible !important", // Force visibility
  },

  // Ensure content doesn't overlap
  paddingRight: theme.spacing(1),
  boxSizing: "border-box",
}));

export default function EpubEditor() {
  return (
    <ProjectPageLayout pageName={pageName}>
      <Container>
        <Typography variant="h2" sx={{ paddingTop: 12 }}>
          Mini Epub Editor <Chip label="Personal Project" color="primary" />
        </Typography>
        <Typography variant="body1" sx={{ width: "45vw", py: 2 }}>
          I've often needed a simple way to edit an EPUB's metadata—specifically
          the title, author, and cover image. I like keeping my Kindle library
          visually consistent, and missing covers really stand out!
        </Typography>
        <Typography variant="body1" sx={{ width: "45vw", py: 2 }}>
          The current options are either downloading Calibre, which has a
          complex interface and a learning curve, or using scattered online
          tools that let you change only one field at a time. None offered a
          streamlined, all-in-one solution.{" "}
        </Typography>
        <Typography variant="body1" sx={{ width: "45vw", py: 2 }}>
          Mini Epub Editor is a small web app I built with Remix to solve that
          problem.
        </Typography>
        <Box sx={{ padding: 4 }} aria-hidden="true" />
        <Box
          component="img"
          loading="lazy"
          sx={{ width: "100%", boxShadow: 5, borderRadius: 3 }}
          alt="Mini Epub Editor Homepage"
          src={epubEditorImages.Home}
        />
        <Box sx={{ padding: 6 }} aria-hidden="true" />
        <ChatBubble
          align="right"
          messages={[
            "Mini because it offers minimal functionalities in a minimalistic UI 😎",
          ]}
        />

        <Typography variant="h4" sx={{ paddingTop: 16 }}>
          Process
        </Typography>
        <Typography variant="body1">
          I broke development into three tightly coupled stages:
        </Typography>
        <Typography variant="body1">
          1. User uploads an EPUB, and the server parses it to extract existing
          metadata.
        </Typography>
        <Typography variant="body1">
          2. A form displays the extracted data and allows the user to edit it.
        </Typography>
        <Typography variant="body1">
          3. The app injects the updated data back into the EPUB, and the edited
          file is served for download.
        </Typography>
        <Typography variant="h6" color="primary">
          Which resulted in the logical, straightforward, user flow:
        </Typography>
        <ScrollImageList>
          {userFlowData.map((item) => (
            <ImageListItem key={item.id}>
              <Box
                component="img"
                src={`${item.img}`}
                alt={item.id}
                sx={{ width: "100%", boxShadow: 5, borderRadius: 2 }}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.id}
                subtitle={<span>{item.text}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ScrollImageList>

        <Box sx={{ padding: 16 }} aria-hidden="true" />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ px: 4 }}>
            <Typography variant="h4">Tech Stack</Typography>
            <TechStack stack={["Remix", "Typescript", "Intent UI"]} />
            <Typography variant="body1">
              Remix was the obvious choice—it allowed me to build a small-scale
              app while using its robust server-side capabilities to handle EPUB
              parsing and injection on the backend.
            </Typography>
            <Typography variant="body1">
              The app uses JSZip to unzip EPUB files and manipulate content, and
              xml2js to convert XML to JavaScript objects and vice versa.
            </Typography>
            <ChatBubble
              align="right"
              size="normal"
              messages={[
                "An interesting side effect of this endeavor was becoming familiar with epub formatting standards.",
              ]}
            />
            <Typography variant="body1">
              I use session storage cookies to store the UUID of the uploaded
              file, which is used to fetch and rewrite the file on the server.
            </Typography>
          </Box>
          <Box sx={{ px: 4, display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h4">Pain Points</Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: "1rem" }}
              color="primary.main"
            >
              temporary storage of large files
            </Typography>
            <Typography variant="body1">
              Simplicity was a core goal, so I ruled out databases from the
              start. My initial plan was to store uploaded files directly in
              session cookies—but I quickly hit the 4KB limit. As a compromise,
              I used an in-memory map indexed by UUID.
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: "1rem" }}
              color="primary.main"
            >
              memory persistence across Remix routes
            </Typography>
            <Typography variant="body1">
              Unlike traditional React apps, state management in Remix doesn’t
              rely on hooks like useState. Instead, you use session cookies and
              URL parameters. And since initially my goal had been to use
              session cookies to store the files, I ended up using that solution
              to store file mapping IDs—and also to hide those IDs from the
              user.
            </Typography>
            <ChatBubble
              align="left"
              size="normal"
              messages={[
                "But in retrospect, it might've been better to use url segments; even if it meant exposing the file ID in the url.",
                "Cleaner code and less complexity.",
              ]}
            />
          </Box>
        </Box>
      </Container>

      <Box sx={{ padding: 16 }} aria-hidden="true" />
      <Box component="section" sx={{ px: 20 }}>
        <Typography variant="h4" align="center" sx={{ paddingBottom: 4 }}>
          The decision to keep it local
        </Typography>
        <Typography variant="body1">
          I always intended to host this app, but didn’t give deployment enough
          thought until late in development.
        </Typography>
        <Typography variant="body1">
          In hindsight, that was a mistake. I had experience deploying
          serverless React SPAs, but Remix's architecture posed different
          challenges.
        </Typography>
        <Typography variant="body1">
          Because the app relies on in-memory storage, I’d need a persistent
          host like Fly.io—an option that comes with higher costs. I explored
          alternatives like AWS S3 + Netlify functions, but for a personal
          project, that felt like overkill.
        </Typography>
        <Typography variant="body1">
          So for now, everything stays local and ephemeral, in line with the
          app’s minimalistic, personal-use focus.
        </Typography>
        <Typography variant="h6" align="center" sx={{ paddingTop: 2 }}>
          But what if?
        </Typography>
        <ChatBubble
          align="left"
          messages={[
            "The next step here, for scaling this app or making it publicly available would definitely start with implementing a more robust storage solution.",
          ]}
        />
      </Box>
    </ProjectPageLayout>
  );
}

const userFlowData = [
  {
    id: "Step 1",
    text: "Home page form prompting epub upload",
    img: epubEditorImages.Home,
  },
  {
    id: "Step 2",
    text: "Edit form filled with dropped epub metadata",
    img: epubEditorImages.Flow1,
  },
  {
    id: "Step 3",
    text: "User edits: drops cover",
    img: epubEditorImages.Flow2,
  },
  { id: "Step 4", text: "Download page", img: epubEditorImages.Flow3 },
];
