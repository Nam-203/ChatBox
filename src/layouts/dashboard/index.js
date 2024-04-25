import React, { useState } from "react";
import { Box, Stack, IconButton, Divider, Avatar } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";
import SideBar from "./SideBar";

const Container = styled(Box)({
  display: "flex",
  height: "100%",
});

const DashboardLayout = () => {
  return (
    <Container>
      <SideBar />
      {/* <MainContent>
        <Outlet />
      </MainContent> */}
      <Outlet />
    </Container>
  );
};

export default DashboardLayout;
