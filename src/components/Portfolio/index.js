import projects from "../Projects";
import ProjectCard from "../Card";
import Grid from "@mui/material/Grid";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio-container">
        {" "}
        <Grid className="grid-container" container direction="row" spacing={2}>
          {" "}
          {projects.map((project) => (
            <Grid
              md={3}
              sm={8}
              xs={10}
              item
              key={project.name}
              className="grid-project"
            >
              {" "}
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
