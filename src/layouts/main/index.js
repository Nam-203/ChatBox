import { Container, Stack } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo2.gif"
import { useSelector } from "react-redux";
const MainLayout = () => {
  const {isLoggedId} = useSelector((state)=> state.auth)
  if (isLoggedId) {
    return <Navigate to="/app"/>
    
  }
  return (
    <Container sx={{ mt: 5 }} maxWidth="sm">
      <Stack spacing={5}>
        <Stack
          sx={{ width: "100%" }}
          direction={"column"}
          alignItems={"center"}
        >
          <img style={{height:220, width:220}}src={Logo} alt="loho"/>
        </Stack>
      </Stack>
      <Outlet />
    </Container>
  );
};

export default MainLayout;
