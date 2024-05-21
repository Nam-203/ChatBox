// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import ThemeSettings from "./components/settings";
import { forwardRef, useEffect, useState } from "react";
import MuiAlert from "@mui/material/Alert"
import { useDispatch, useSelector } from "react-redux";
import { closeSnackBar } from "./redux/slices/app";
import { Snackbar } from "@mui/material";
const Alert = forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

function App() {
  const dispatch = useDispatch();
 const vertical="top";
 const horizontal="center";
const snackbar= useSelector((state) => (state.app.snackbar)); // Kiểm tra severity
console.log(snackbar);
const {message,isopen, severity} =snackbar

console.log()

  return (
    <>
      <ThemeProvider> 
        <ThemeSettings>
          {" "}
          <Router />{" "}
        </ThemeSettings>
      </ThemeProvider>
      {message && isopen ? (
        <Snackbar
          anchorOrigin={{ vertical , horizontal }}
          open={isopen}
          autoHideDuration={4000}
          key={vertical + horizontal }
          onClose={() => {
            console.log("This is clicked");
            dispatch(closeSnackBar());
          }}
        >
          <Alert
          width={"100%"}
            onClose={() => {
              console.log("This is clicked");
              dispatch(closeSnackBar());
            }}
            severity={severity}
            
          >
            {message}
          </Alert>
        </Snackbar>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
