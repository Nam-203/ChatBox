import { faker } from "@faker-js/faker";

import {
  Avatar,
  Box,
  Stack,
  useTheme,
  Typography,
  IconButton,
} from "@mui/material";
import React from "react";
import StyledBadge from "./StyledBage";
import {
 
  ArrowDownLeft,
  ArrowUpRight,
  Phone,
  VideoCamera,
} from "phosphor-react";

const CallLogElement = (props) => {
  const theme = useTheme();
  return (
    <>
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
              <Typography variant="subtitle2">
                {faker.name.fullName()}
              </Typography>
              <Stack direction={"row"}>
                {props.icoming ? (
                  <ArrowDownLeft color={props.missed ? "red" : "green"} />
                ) : (
                  <ArrowUpRight color={props.missed ? "red" : "green"} />
                )}
                <Typography variant="caption">yesterday 21:22</Typography>
              </Stack>
            </Stack>
          </Stack>
          <IconButton>
          <Phone color="green" />
        </IconButton>
      
        </Stack>
      </Box>
    </>
  );
};

const CallElement = (props) => {
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
            <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
            <Stack direction={"row"}>
              {props.icoming ? (
                <ArrowDownLeft color={props.missed ? "red" : "green"} />
              ) : (
                <ArrowUpRight color={props.missed ? "red" : "green"} />
              )}
              <Typography variant="caption">yesterday 21:22</Typography>
            </Stack>
          </Stack>
        </Stack>
       <Stack direction={"row"} alignItems={"center"}>
       <IconButton>
          <Phone color="green" />
        </IconButton>
        <IconButton>
          {" "}
          <VideoCamera color="green" />
        </IconButton>
       </Stack>
      </Stack>
    </Box>
  );
};

export { CallElement, CallLogElement };
