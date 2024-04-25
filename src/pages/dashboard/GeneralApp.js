import React, { Suspense, lazy } from "react";

import { Box, Stack, useTheme } from "@mui/material";
import Chats from "./Chats";
import ChatHeader from "../../components/Chat/Header";
import Footer from "./../../components/Chat/Footer";
import Message from "../../components/Chat/Message";
import Conversation from "../../components/Chat/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

const GeneralApp = () => {
  const theme = useTheme();
  const {sidebar}= useSelector((store)=>store.app)

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: sidebar.open ?"calc(100vw - 720px)":"calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        <Conversation />
      </Box>
      {sidebar.open &&  <Contact />}
     
    </Stack>
  );
};

export default GeneralApp;
