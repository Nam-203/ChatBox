import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import Search from "../../components/Search/Search";
import SearchIconWrapper from "../../components/Search/SearchIconWrapper";
import StyledInputBase from "../../components/Search/StyledInputBase";
import ChatElement from "../../components/ChatElement";


const Chats = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: 320,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
       
      }}
    >
      <Stack p={3} spacing={2} sx={{height:"100vh"}}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5">chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Stack>
        <Stack p={2.4} spacing={1}  >
          <Stack direction="row" alignItems={"center"} spacing={2}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider size={20} />
          </Stack>
          <Stack
            direction={"column"}
            sx={{
              flexGrow: 1,
             overflow :"scroll",
              height: "100%", // Sử dụng thanh cuộn khi cần

              maxHeight: "calc(100vh - 260px)",
              "&::-webkit-scrollbar": {
                width: "0px", // Đặt kích thước của thanh cuộn
              },
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1", // Đặt màu nền của thanh cuộn
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#888", // Đặt màu của nút cuộn
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#555", // Đặt màu của nút cuộn khi di chuột qua
              },
              "&::-webkit-scrollbar-thumb:vertical": {
                display: "none",
              },
            }}
          >
           <SimpleBarStyle timeout={500} clickOnTrack={false}  >
           <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                Pinned
              </Typography>
              {ChatList.filter((el) => el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })}
            </Stack>
              <Stack spacing={2.4}>
                <Typography p={1} variant="subtitle2" sx={{ color: "#676767" }}>
                  All Chats
                </Typography>
                {ChatList.filter((el) => !el.pinned).map((el) => {
                  return <ChatElement {...el} />;
                })}
              </Stack>
           </SimpleBarStyle>
            
           
          </Stack>
        
      </Stack>
    </Box>
  );
};

export default Chats;
