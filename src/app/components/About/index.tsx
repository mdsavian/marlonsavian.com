import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AvatarShapes } from "../../../assets/avatar-shapes.svg";

const About: React.FC = () => {
  return (
    <section
      style={{
        background: "linear-gradient(90deg, #4831d4 67%, #ccf381 33%)",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Grid
        mt="calc(11.2em + 2em)"
        sx={{
          maxWidth: "1500px",
          paddingLeft: "6rem",
          paddingRight: "6rem",
        }}
        alignContent="center"
        display="flex"
        justifyContent="space-between"
      >
        <Grid display="block">
          <Typography variant="h2" color="secondary" fontWeight={600} align="left">
            Hi, I'm Marlon, Fullstack Developer
          </Typography>
          <Typography variant="h5" color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Grid>
        <Grid>
          <figure>{/* <AvatarShapes /> */}</figure>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
