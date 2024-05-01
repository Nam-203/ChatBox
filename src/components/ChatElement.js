import { faker } from "@faker-js/faker";
import { Avatar, Badge, Box, Stack, Typography, useTheme } from "@mui/material";
import StyledBadge from "./StyledBage";

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
  export default ChatElement