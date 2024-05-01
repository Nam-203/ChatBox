import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
import React from "react";
import Search from "../../components/Search/Search";
import SearchIconWrapper from "../../components/Search/SearchIconWrapper";
import { MagnifyingGlass } from "phosphor-react";
import StyledInputBase from "../../components/Search/StyledInputBase";
import { CallElement } from "../../components/CallElement";
import { Member_List } from "../../data";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const StartCall = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Start Call</DialogTitle>
      <DialogContent sx={{ mt: 5 }}>
        <Stack spacing={3}>
        <Stack sx={{ width: "100%" }}>
          <Search sx={{ width: "100%" }}>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Stack>
        {/* Call list  */}
        {Member_List.map((el)=><CallElement {...el}/>)}
        </Stack>
        
      </DialogContent>
    </Dialog>
  );
};

export default StartCall;
