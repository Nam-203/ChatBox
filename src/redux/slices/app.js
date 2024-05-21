import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
  user: {},
  sidebar: {
    open: false,
    type: "CONTACT",
  },
  snackbar: {
    isopen: false,
    message: null,
    severity: null,
  },
  users: [],
  friends: [],
  friendRequests: [], // Corrected to friendRequests to match your usage
  chat_type: null,
  room_id: null,
  all_users: [],
  call_logs: [],

};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    fetchUser(state, action) {
      state.user = action.payload.user;
    },
    toggleSidebar(state) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      console.log(action);
      state.sidebar.type = action.payload.type;
    },
    showSnackBar(state, action) {
      console.log(action);
      state.snackbar.isopen = true;
      state.snackbar.message = action.payload.message;
      state.snackbar.severity = action.payload.severity;
    },
    closeSnackBar(state, action) {
      state.snackbar.isopen = false;
      state.snackbar.message = null;
      state.snackbar.severity = null;
    },
    updateUsers(state, action) {
      state.users = action.payload.users;
    },
    updateFriends(state, action) {
      state.friends = action.payload.friends;
    },
    updateFriendRequests(state, action) {
      state.friendRequests = action.payload.requests;
    },
    selectConversation(state, action) {
      state.chat_type = "vietnamvidual";
      state.room_id = action.payload.room_id;
    }, updateUser(state, action) {
      state.user = action.payload.user;
    },
  },
});
export const {selectConversation, showSnackBar, updateUsers, updateFriends, udateFriendsRequest } =
  slice.actions;
export default slice.reducer;

export function toggleSidebar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.toggleSidebar());
  };
}
export function UpdateSidebarType(type) {
  return async (dispatch, getState) => {
    console.log(type);
    dispatch(slice.actions.updateSidebarType({ type }));
  };
}
export function openSnackBar({ message, severity }) {
  return async (dispatch, getState) => {
    dispatch(slice.actions.showSnackBar({ message, severity }));
    setTimeout(() => {
      dispatch(slice.actions.closeSnackBar());
    }, 4000);
  };
}
export function closeSnackBar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.closeSnackBar());
  };
}
export const FetchUsers = () => {
  return async (dispatch, getState) => {
    await axios
      .get(`/user/get-users`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then(function (response) {
        console.log(response);
        dispatch(updateUsers({ users: response.data.data }));
      })
      .catch(function (err) {
        console.log(err);
      });
  };
};

export const FetchFriends = () => {
  return async (dispatch, getState) => {
    await axios
      .get(`/user/get-friends`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then(function (response) {
        console.log(response);
        dispatch(updateFriends({ friends: response.data.data }));
      })
      .catch(function (err) {
        console.log(err);
      });
  };
};
export function FetchFriendRequests() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-friend-request",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(
          slice.actions.updateFriendRequests({ requests: response.data.data })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export const SelectConversation =({room_id})=>{
  console.log(room_id);
  return async (dispatch, getState) => {
    dispatch(selectConversation({ room_id }));
  };

}
export const FetchUserProfile = () => {
  return async (dispatch, getState) => {
    axios
      .get("/user/get-me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.fetchUser({ user: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const UpdateUserProfile = (formValues) => {
  console.log(formValues);
  return async (dispatch, getState) => {
    axios
      .post(
        "/user/update-me",
        { ...formValues,},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.updateUser({ user: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
