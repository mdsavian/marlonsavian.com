import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AvatarShapes from "../../../assets/avatar-shapes.svg";
import Image from "next/image";
import theme from "@/theme";

const About: React.FC = () => {
  return (
    <>
      {/* */}
      <div
        className="              
        
        // bg-about
        sm:bg-blue
        

       h-72"
      ></div>

      {/* <Box
        sx={{
          background: {
            md: "transparent",
          },
          backgroundColor: {
            xs: "primary.main",
          },
          paddingBottom: "4rem",
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
              maxWidth="30vw"
            >
              Fullstack Developer
            </Typography>

            <span style={{ color: "white", maxWidth: "400px", fontSize: "1rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </span>
          </Grid>

          <Grid
            sx={{
              color: "secondary.main",
              padding: {
                xs: "0 15vw",
                md: "0 10em",
              },
              marginTop: "3em",
              maxWidth: "1500px",
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <ul
              style={{
                margin: "0",
                padding: "0",
                listStyle: "none",
                fontSize: "0.8rem",
                width: "65%",
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <li style={{ width: "calc(50% - 1.5rem)" }}>
                Highly skilled at progressive enhancement, design systems &amp; UI Engineering.
              </li>
              <li style={{ width: "calc(50% - 1.5rem)" }}>
                Over a decade of experience building products for clients across several countries.
              </li>
            </ul>
          </Grid>

          {/* <Grid>
        
        
        </Grid>
        <Grid mt="-5.5em">
          <figure>
            <Image src={AvatarShapes} alt="My SVG" width={550} height={430} />
          </figure> */}
      {/* </Grid>  
        </section>
      </Box> */}
    </>
  );
};

export default About;
