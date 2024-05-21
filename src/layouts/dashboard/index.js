import React, { useEffect, useState } from "react";
import { Box, Stack, IconButton, Divider, Avatar } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { connectSocket, socket } from "../../socket";
import { SelectConversation, showSnackBar } from "../../redux/slices/app";
import {
  AddDirectConversation,
  AddDirectMessage,
  UpdateDirectConversation,
} from "../../redux/slices/conversation";

const Container = styled(Box)({
  display: "flex",
  height: "100%",
});
const DashboardLayout = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { conversation } = useSelector((state) => state.conversation);
  const { current_conversation } = useSelector(
    (state) => state.conversation.direct_chat
  );

  const user_id = window.localStorage.getItem("user_id");
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     window.onload = () => {
  //       if (!window.location.hash) {
  //         window.location = window.location + "#loaded";

  //       }
  //     };
  //     window.addEventListener("load", handleLoad);
  //     if (!socket) {
  //       connectSocket(user_id);
  //     }
  //     //"newfriends"
  //     socket.on("newfriends_request", function (data) {
  //       dispatch(showSnackBar({ severity: "success", message: data.message }));
  //     });
  //     socket.on("request_accepted", function (data) {
  //       dispatch(showSnackBar({ severity: "success", message: data.message }));
  //     });
  //     socket.on("request _sent", function (data) {
  //       dispatch(showSnackBar({ severity: "error", message: data.message }));
  //     });
  //   }
  //   return () => {
  //     socket.off("newfriends_request");
  //     socket.off("request_accepted");
  //     socket.off("request _sent");
  //   };
  // }, [isLoggedIn, socket]);
  useEffect(() => {
    if (isLoggedIn) {
      const handleLoad = () => {
        if (!window.location.hash) {
          window.location = window.location + "#loaded";
          window.location.reload();
        }
      };

      window.addEventListener("load", handleLoad);
      if (!socket) {
        connectSocket(user_id);
      }
      socket.on("new_message", (data) => {
        const message = data.message;
        console.log(data);
        // check if msg we got is from currently selected conversation
        if (current_conversation?.id === data.conversation_id) {
          dispatch(
            AddDirectMessage({
              id: message.id,
              type: "msg",
              subtype: message.type,
              message: message.text,
              incoming: message.to === user_id,
              outgoing: message.from === user_id,
            })
          );
        }
      });
      socket?.on("newfriends_request", (data) => {
        dispatch(showSnackBar({ severity: "success", message: data.message }));
      });
      socket?.on("request_accepted", (data) => {
        dispatch(showSnackBar({ severity: "success", message: data.message }));
      });
      socket?.on("request_sent", (data) => {
        dispatch(showSnackBar({ severity: "error", message: data.message }));
      });
      socket.on("start_chat", (data) => {
        console.log(data);
        const existing_conversation = conversation.find(
          (el) => el.id === data._id
        );
        if (existing_conversation) {
          dispatch(UpdateDirectConversation({ conversation: data }));
        } else {
          dispatch(AddDirectConversation({ conversation: data }));
        }
        dispatch(SelectConversation({ room_id: data._id }));
      });

      return () => {
        window.removeEventListener("load", handleLoad);
        socket?.off("newfriends_request");
        socket?.off("request_accepted");
        socket?.off("request_sent");
        socket?.off("start_chat");
      };
    }
  }, [isLoggedIn, user_id]);
  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }
  return (
    <Container>
      <SideBar />
      {/* <MainContent>
        <Outlet />
      </MainContent> */}
      <Outlet />
    </Container>
  );
};

export default DashboardLayout;
