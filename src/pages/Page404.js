import React from "react";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link as RouterLink } from "react-router-dom";
import logo3 from "../assets/Images/logo3.gif";
import { useSelector } from "react-redux";

const Page404 = () => {
  const user_id = useSelector((state)=>state.auth)
  return (
    <>
      <Box
        width={"100%"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "nowrap",
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h1"> OH NO! 404</Typography>
              <Typography variant="h6">
                The page you’re looking for doesn’t exist.
              </Typography>{" "}
              {user_id ? <Link to="/" component={RouterLink} variant="subtitle2">
                <Button sx={{mt: 5}} variant="contained">Back Home</Button>
              </Link> : <Link to="/auth/login" component={RouterLink} variant="subtitle2">
                <Button sx={{mt: 5}} variant="contained">Back Home</Button>
              </Link>}
             
            </Grid>
            <Grid item xs={6}>
              <img src={logo3} alt="" width={500} height={450} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Page404;
