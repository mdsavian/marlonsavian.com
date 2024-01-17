import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AvatarShapes from "../../../assets/avatar-shapes.svg";
import Image from "next/image";
import theme from "@/theme";

const About: React.FC = () => {
  return (
    <Box
      sx={{
        background: {
          md: "linear-gradient(90deg, #4831d4 67%, #ccf381 33%)",
        },
        backgroundColor: {
          xs: "primary.main",
        },
      }}
      display="flex"
    >
      <section>
        <Grid
          sx={{
            marginTop: {
              xs: "8em",
              md: "10em",
            },
            padding: {
              xs: "0 15vw",
              md: "0 10em",
            },
            maxWidth: "1500px",
          }}
          display="flex"
          flexDirection="column"
        >
          <Typography
            variant="h3"
            color="secondary"
            fontWeight={600}
            mb="25px"
            textAlign="left"
            sx={{
              maxWidth: {
                md: "30vw",
              },
            }}
          >
            {`Fullstack Developer`}
          </Typography>

          <span style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </span>
        </Grid>

        {/* <Grid>
        
        
        </Grid>
        <Grid mt="-5.5em">
          <figure>
            <Image src={AvatarShapes} alt="My SVG" width={550} height={430} />
          </figure> */}
        {/* </Grid>  */}
      </section>
    </Box>
  );
};

export default About;
