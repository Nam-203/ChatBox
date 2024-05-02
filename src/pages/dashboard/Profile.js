import React, { useCallback } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import ProfileForm from "../../sections/settings/ProfileForm";

const Profile = () => {
    

  return (
    <Stack direction="row" sx={{ width: "100%" }}>
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
        <Stack p={4} spacing={5}>
          {/* HEADER */}
          <Stack direction={"row"} alignItems={"center"} spacing={3}>
            <IconButton>
              <CaretLeft size={25} color="#4B4B4B" />
            </IconButton>
            <Typography variant="h3">Profile</Typography>
          </Stack>
          <ProfileForm />
        </Stack>
        {/* Form */}
      </Box>
    </Stack>
  );
};

export default Profile;
