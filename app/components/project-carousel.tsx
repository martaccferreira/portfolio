import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import { type Project } from "./projects";
import { Link } from "react-router";

const ScrollContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  paddingBottom: theme.spacing(2),
  marginBottom: theme.spacing(2),
  overflowX: "scroll",
  overflowY: "hidden",
  scrollBehavior: "smooth",

  "&::-webkit-scrollbar": {
    height: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "4px",
    border: "none",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.contrastText,
}));

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <Box
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseUp}
      onMouseUp={onMouseUp}
      sx={{ mb: 18 }}
    >
      <ScrollContainer ref={containerRef}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ flexShrink: 0 }}
          >
            <Card
              sx={{
                width: 426,
                borderRadius: 2,
                overflow: "hidden",
                m: 3,
              }}
            >
              <StyledLink to={project.route}>
                <CardMedia
                  component="img"
                  loading="lazy"
                  alt={project.title}
                  height="218"
                  image={project.imageUrl}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}{" "}
                    {project.isWIP && (
                      <Chip label="WIP" color="primary" size="small" />
                    )}
                  </Typography>
                  <Typography variant="body2">{project.description}</Typography>
                </CardContent>
              </StyledLink>
              <CardActions
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <StyledLink to={project.route}>
                  <Button size="small" sx={{ fontWeight: 600 }}>
                    Learn More
                  </Button>
                </StyledLink>
                {project.link && (
                  <Link to={project.link} target="__blank">
                    <IconButton color="primary">
                      <GitHubIcon />
                    </IconButton>
                  </Link>
                )}
              </CardActions>
            </Card>
          </motion.div>
        ))}
      </ScrollContainer>
    </Box>
  );
}
