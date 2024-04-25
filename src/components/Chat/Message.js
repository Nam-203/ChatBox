import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from "./MsgType";

const Message = () => {
  return (
    <Box p={3} height="100%" overflow="auto "sx={{
        "&::-webkit-scrollbar": {
            width: "5px", // Đặt kích thước của thanh cuộn
          },
          "&::-webkit-scrollbar-thumb" :{
            background: "gray",
           borderRadius:"10px"
          },
}}>
      <Stack spacing={3}>
        {Chat_History.map((el)=>{
          switch (el.type) {
            case "divider":
              return <Timeline el={el} />;

            case "msg":
              switch (el.subtype) {
                case "img":
                  //image line
                  return <MediaMsg el={el} />;

                case "doc":
              return <DocMsg el={el} />;
                case "link":
                  return <LinkMsg el={el} />;
                 
                case "reply":
                    // reply line
                  return <ReplyMsg el={el} />;

                default:
                  return <TextMsg el={el} />;
              }
            default:
              return <></>;
              ;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
