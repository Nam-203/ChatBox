import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Search from "../../components/Search/Search";
import SearchIconWrapper from "../../components/Search/SearchIconWrapper";
import { MagnifyingGlass, Phone } from "phosphor-react";
import StyledInputBase from "../../components/Search/StyledInputBase";
import { useTheme } from "@mui/material/styles";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { CallLogElement } from "../../components/CallElement";
import { CallList } from "../../data";
import StartCall from "../../sections/main/StartCall";

const Call = () => {
  const [openDialogCall, setOpenDialogCall] = useState(false);
  const handleCloseDialog = () => {
    setOpenDialogCall(false);
  };
  const theme = useTheme();
  return (
    <>
      <Stack direction={" row"} sx={{ width: "100%" }}>
        {/* left */}
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.paper,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack>
              <Typography variant="h5">Call Log</Typography>
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
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="subtitle2" component={Link}>
                Start Conversation Call{" "}
              </Typography>
              <IconButton
                onClick={() => {
                  setOpenDialogCall(true);
                }}
              >
                <Phone style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack
              direction={"column"}
              sx={{
                flexGrow: 1,
                overflowY: "scroll",
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
              <SimpleBarStyle timeout={500} clickOnTrack={false}>
                <Stack spacing={2.4}>
                  <Typography variant="subtitle2"> Pinned</Typography>
                  {/* Call log */}
                  {CallList.map((el)=>  <CallLogElement {...el}/>)}
                
                </Stack>
              </SimpleBarStyle>
            </Stack>
          </Stack>
        </Box>
        {/* Right */}
        {openDialogCall && <StartCall open={openDialogCall} handleClose={handleCloseDialog}/>}
      </Stack>
    </>
  );
};

export default Call;
