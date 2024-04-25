import React from "react";
import { Box } from '@mui/material';
import logo2 from "../assets/Images/logo2.gif"
const LoadingScreen = () => {
  return(
    <Box width={"100%"}  sx={{display :'flex',alignItems:"center",justifyContent: 'center', flexWrap:"nowrap" }}>
    
    <img src={logo2}/>
    </Box>
  )
  ;
};

export default LoadingScreen;
