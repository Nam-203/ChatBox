import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { Chat_History } from "../../data";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
} from "./MsgType";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../../socket";
import { FetchCurrentMessages, SetCurrentConversation } from "../../redux/slices/conversation";

const Message = (menu) => {
  const dispatch = useDispatch()
  const {isLoggedIn} = useSelector ((state)=>state.auth)
  const { conversations ,current_messages =[] } = useSelector(
    (state) => state.conversation.direct_chat
  );
 
  const { room_id } = useSelector((state) => state.app);
  // useEffect(() => {
  //   const current = conversations.find((el) => el?.id === room_id);
  //   if (!current) return;

  //   let callCount = 0;

  //   const fetchMessages = () => {
  //     if (callCount >= 5) return;

  //     socket.emit("get_messages", { conversation_id: current.id }, (data) => {
  //       dispatch(FetchCurrentMessages({ messages: data }));
  //     });

  //     callCount += 1;

  //     // Call fetchMessages again after a delay
  //     setTimeout(fetchMessages, 1000); // Adjust the delay as needed
  //   };

  //   fetchMessages(); // Initial call

  //   dispatch(SetCurrentConversation(current));
  // }, [conversations,current_messages]);
  useEffect(() => {
    const current = conversations.find((el) => el?.id === room_id);

    socket.emit("get_messages", { conversation_id: current?.id }, (data) => {
      // data => list of messages
      dispatch(FetchCurrentMessages({ messages: data }));
    });

    dispatch(SetCurrentConversation(current));
  }, [conversations]);
  
console.log();
  return (
    <Box
      p={3}
      height="100%"
      overflow="auto "
      sx={{
        "&::-webkit-scrollbar": {
          width: "5px", // Đặt kích thước của thanh cuộn
        },
        "&::-webkit-scrollbar-thumb": {
          background: "gray",
          borderRadius: "10px",
        },
      }}
    >
      <Stack spacing={3}>
        { current_messages.map((el) => {
          switch (el.type) {
            case "divider":
              return <Timeline el={el} menu={menu} />;

            case "msg":
              switch (el.subtype) {
                case "img":
                  //image line
                  return <MediaMsg el={el} menu={menu} />;

                case "doc":
                  return <DocMsg el={el} menu={menu} />;
                case "link":
                  return <LinkMsg el={el} menu={menu} />
                case "reply":
                  // reply line
                  return <ReplyMsg el={el} menu={menu} />;
                default:
                  return <TextMsg el={el} menu={menu} />;
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
