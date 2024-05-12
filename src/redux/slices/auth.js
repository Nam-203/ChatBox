import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
  isLoggedIn: false,
  token: "",
  isLoading: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      console.log(action);
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
    },
    sigOut(state, action) {
      state.isLoggedIn = false;
      state.token = "";
      state.isLoading = false;
    },
  },
});
export const { logIn, sigOut } = slice.actions;

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
      });
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
      });
  };
}
