import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProjectCard({ project }) {
  return (
    <Card sx={{ maxWidth: 250 }} className="card">
      <CardMedia
        component="img"
        alt="project-image"
        width="20"
        height="140"
        image={project.img}
        className="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="card-description"
        >
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={project.link}>
          <Button size="small">Learn More</Button>
        </a>
      </CardActions>
    </Card>
  );
}
