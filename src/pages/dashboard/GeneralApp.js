import React, { Suspense, lazy } from "react";

import { Box, Stack, Typography, useTheme } from "@mui/material";
import Chats from "./Chats";
import ChatHeader from "../../components/Chat/Header";
import Footer from "./../../components/Chat/Footer";
import Message from "../../components/Chat/Message";
import Conversation from "../../components/Chat/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import ShareMessages from "../../components/ShareMessages";
import StarredMessages from "../../components/StarredMessages";
import NochatSVG from "../../assets/Illustration/NoChat";
const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar, chat_type,room_id } = useSelector((store) => store.app);
  console.log(room_id+ "rommmm");

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 720px)" : "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        {room_id !== null && chat_type === "vietnamvidual" ? <Conversation /> :
        <Stack spacing={2} sx={{height:"100%", width:"100%"}} alignItems={"center"} justifyContent={"center"}>
          <NochatSVG/>
          <Typography>
            Select a conversation or start new one
          </Typography>

        </Stack>
        }
       
      </Box>
      {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case "CONTACT":
              return <Contact />;
            case "STARRED":
              return <StarredMessages />;
            case "SHARED":
              return <ShareMessages/>
            default:
              break;
          }
        })()}
    </Stack>
  );
};

export default GeneralApp;
