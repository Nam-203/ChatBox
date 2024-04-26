import { Box, useTheme } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Message from "./Message";
import { useSelector } from "react-redux";
import Header from "./Header";

const Conversation = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100%",
        width:"100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F0F4FA"
            : theme.palette.background.default,
      }}
    >
     <Header/>
      <Box sx={{ flexGrow: 1 }} height="83.5%">
        <Message menu={true}/>
      </Box>
      <Footer />
    </Box>
  );
};

export default Conversation;
