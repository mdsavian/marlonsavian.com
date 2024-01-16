import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AvatarShapes from "../../../assets/avatar-shapes.svg";
import Image from "next/image";

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
          padding: "0 10rem",
        }}
        alignContent="center"
        display="flex"
        justifyContent="space-between"
      >
        <Grid display="block">
          <Typography variant="h1" color="secondary" fontWeight={600} align="left" fontSize="3.4em">
            {`Fullstack Developer`}
          </Typography>
          <span style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </span>
        </Grid>
        <Grid mt="-5.5em">
          <figure>
            <Image src={AvatarShapes} alt="My SVG" width={550} height={430} />
          </figure>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
