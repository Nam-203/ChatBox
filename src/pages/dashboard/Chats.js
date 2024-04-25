import { faker } from "@faker-js/faker";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { ChatList } from "../../data";
import { alpha, styled } from "@mui/material/styles";
import { SimpleBarStyle } from "../../components/Scrollbar";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const ChatElement = (props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.default,
      }}
      p={2}
    >
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2}>
          {props.online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}

          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{props.name}</Typography>
            <Typography variant="caption2">{props.msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems={"center"}>
          <Typography sx={{ fontWeight: 600 }} variant= "caption" >
            {props.time}
          </Typography>
          <Badge color="primary" badgeContent={props.unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.paper, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`, // Đã thêm dấu đóng ngoặc vào hàm calc()
    width: "100%",
  },
}));

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
