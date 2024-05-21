import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";
const user_id = localStorage.getItem("user_id");
const initialState = {
  direct_chat: {
    conversations: [],
    current_conversation: null,
    current_message: [],
  },
  group_chat: {},
};
const slice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    fetchDirectConversations(state, action) {
      const list = action.payload.conversations.map((el) => {
        const user = el.participants.find(
          (elm) => elm._id.toString() !== user_id
        );
        return {
          id: el._id,
          user_id: user._id,
          name: `${user.firstName} ${user.lastName}`,
          online: user.status === "Online",
          img: faker.image.avatar(),
          msg: faker.music.songName(),
          time: "9:36",
          unread: 0,
          pinned: false,
          about: user?.about,
        };
      });

      state.direct_chat.conversations = list;
    },
    updateDirectConversation(state, action) {
      //data = object{}
      // list - data.map((el)=>el.id === data._id)
      const this_conversation = action.payload.conversation;
      state.direct_chat.conversations = state.direct_chat.conversations.map(
        (el) => {
          if (el.id !== this_conversation) {
            return el;
          } else {
            const user = this_conversation.participants.find(
              (elm) => elm._id.toString() !== user_id
            );
            return {
              id: this_conversation._id,
              user_id: user._id,
              name: `${user.firstName} ${user.lastName}`,
              online: user.status === "Online",
              img: faker.image.avatar(),
              msg: faker.music.songName(),
              time: "9:36",
              unread: 0,
              pinned: false,
              about: user?.about,
            };
          }
        }
      );
    },
    addDirectConversation(state, action) {
      const this_conversation = action.payload.conversation;
      const user = this_conversation.participants.find(
        (elm) => elm._id.toString() !== user_id
      );
      state.direct_chat.conversations.push({
        id: this_conversation._id,
        user_id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        online: user.status === "Online",
        img: faker.image.avatar(),
        msg: faker.music.songName(),
        time: "9:36",
        unread: 0,
        pinned: false,
        about: user?.about,
      });
    },
    setCurrentConversation(state, action) {
      state.direct_chat.current_conversation = action.payload;
    },
    fetchCurrentMessages(state, action) {
      
      const messages = action.payload.messages;
      console.log(messages,"óhir");
      const formatted_messages = messages.map((el) => ({
        id: el._id,
        type: "msg",
        subtype: el.type,
        message: el.text,
        incoming: el.to === user_id,
        outgoing: el.from === user_id,
      }));
      console.log("forr",formatted_messages);
      state.direct_chat.current_messages= formatted_messages
    },
    addDirectMessage(state, action) {
      console.log(action);
      state.direct_chat.current_messages.push(action.payload.message);
    }
  
  },
});
export const { fetchDirectConversations,addDirectConversation,updateDirectConversation, } = slice.actions;
export default slice.reducer;
export const FetchDirectConversations = ({ conversations }) => {
  return async (dispatch, getState) => {
    dispatch(fetchDirectConversations({ conversations }));
  };
};
export const AddDirectConversation = ({ conversations }) => {
  return async (dispatch, getState) => {
    dispatch(addDirectConversation({ conversations }));
  };
};
export const UpdateDirectConversation = ({ conversations }) => {
  return async (dispatch, getState) => {
    dispatch(updateDirectConversation({ conversations }));
  };
};
export const SetCurrentConversation = (current_conversation) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.setCurrentConversation(current_conversation));
  };
};


export const FetchCurrentMessages = ({messages}) => {
  console.log("mess", messages);
  return async(dispatch, getState) => {
    dispatch(slice.actions.fetchCurrentMessages({messages}));
  }
}

export const AddDirectMessage = (message) => {
  console.log("new messs", message);
  return async (dispatch, getState) => {
    dispatch(slice.actions.addDirectMessage({message}));
  }
}