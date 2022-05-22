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
            <Grid item key={project.name}>
              {" "}
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
