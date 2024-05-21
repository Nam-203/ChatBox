import {
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../redux/slices/app";
import { X } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { Shared_docs, Shared_links } from "../data";
import { DocMsg, LinkMsg } from "./Chat/MsgType";

const ShareMessages = () => {
  const theme = useTheme();
  const dispacth = useDispatch();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: 300,
        height: "100vh",
      }}
    >
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 0px 2px rbga(0,0,0,0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction={"row"}
            alignItems={"center"}
            spacing={3}
          >
            <IconButton onClick={() => dispacth(UpdateSidebarType("CONTACT"))}>
              <X />
            </IconButton>
            <Typography variant="subtitle2">ShareMessages</Typography>
          </Stack>
        </Box>
        <Divider />
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs
            sx={{ px: 2, pt: 2 }}
            value={value}
            onChange={handleChange}
            centered
          >
            <Tab label="Media" />
            <Tab label="Links" />
            <Tab label="Docs" />
          </Tabs>
        </Box>
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={3}
        >
          {(() => {
            switch (value) {
              case 0:
                return (
                  <Grid container spacing={2}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => {
                      return (
                        <Grid item xs={4}>
                          <img
                            src={faker.image.avatar()}
                            alt={faker.name.fullName}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                );

              case 1:
                return Shared_links.map((link) => <LinkMsg el={link} />);
              case 2:
                return Shared_docs.map((link) => <DocMsg el={link} />);

              default:
                break;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ShareMessages;
