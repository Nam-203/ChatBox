import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
  isLoggedIn: false,
  token: "",
  isLoading: false,
  user: null,
  user_id: null,
  email: "",
  error: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateIsLoading(state, action) {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoading;
    },
    logIn(state, action) {
      console.log(action);
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
      state.user_id = action.payload.user_id;
    },
    sigOut(state, action) {
      state.isLoggedIn = false;
      state.token = "";
      state.user_id = null;
    },
    updateRegisterEmail(state, action) {
      state.email = action.payload.email;
    },
  },
});
export const { logIn, sigOut, updateRegisterEmail, updateIsLoading } =
  slice.actions;

export default slice.reducer;
export function loginUser(formVlues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "auth/login",
        {
          ...formVlues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        dispatch(
          slice.actions.logIn({ isLoggedIn: true, token: response.data.token })
        );
      })
      .catch(function (err) {
        console.log(err);
      }).finally(()=>{
        if (getState().auth.isLoggedIn===true) {
          window.location.href = '/';
  }});
  };
}
export function logOutUser(user) {
  return async (dispatch, getState) => {
    dispatch(slice.actions.sigOut());
  };
}
export function ForGotPassword(formVlues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "auth/forgot-password",
        {
          ...formVlues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        dispatch(
          slice.actions.logIn({ isLoggedIn: true, token: response.data.token })
        );
      })
      .catch(function (err) {
        console.log(err);
      });
  };
}
export function NewPassword(formVlues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "auth/reset-password",
        {
          ...formVlues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      })
      .finally(() => {
        window.location.href = "/auth/login";
      });
  };
}
export function Register(formValues) {
  return async (dispatch, getState) => {
    dispatch(updateIsLoading({ isLoading: true, error: false }));
    await axios
      .post(
        "auth/register",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        dispatch(updateRegisterEmail({ email: formValues.email }));
        dispatch(updateIsLoading({ isLoading: false, error: false }));
      })
      .catch(function (err) {
        console.log(err);
      })
      .finally(() => {
        if (!getState().auth.error) {
          window.location.href = "/auth/verify";
        }
      });
  };
}
export function VerifyEmail(formVlues) {
  console.log(formVlues);
  return async (dispatch, getState) => {
    await axios
      .post(
        "auth/verify-otp",
        {
          ...formVlues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      }).finally(() => {
        if (!getState().auth.error) {
          window.location.href = "/auth/login";
        }
      });;
  };
}
