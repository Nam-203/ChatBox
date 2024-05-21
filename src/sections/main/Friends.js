import { Dialog, DialogContent, Stack, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  FetchFriendRequests, FetchFriends, FetchUsers } from "../../redux/slices/app";
import { FriendComponent, FriendsRequestComponent, UserComponent } from "../../components/Friends";

// const UserList = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(FetchUsers());
//   }, [dispatch]);
//   const { users } = useSelector((state) => state.app);
//   return (
//     <>
//       {users.map((el) => (
//         <UserComponent key={el._id} {...el} />
//       ))}
//     </>
//   );
// };

// const FriendsList = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(FetchFriends());
//   }, [dispatch]);
//   const { friends } = useSelector((state) => state.app);
//   return (
//     <>
//       {friends.map((el) => (
//         <FriendComponent key={el._id} {...el} />
//       ))}
//     </>
//   );
// };

// const FriendsRequestList = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(FetchFriendRequest());
//   }, [dispatch]);
//   const { friendRequests } = useSelector((state) => state.app);
//   console.log("fiemdd",friendRequests);
//   return (
//     <>
//       {friendRequests.map((el) => (
//         <FriendsRequestComponent key={el._id} {...el.sender} id={el._id} />
//       ))}
//     </>
//   );
// };

// const Friends = ({ open, handleClose }) => {
//   const [value, setValue] = useState(0);
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const renderContent = () => {
//     switch (value) {
//       case 0:
//         return <UserList />;
//       case 1:
//         return <FriendsList />;
//       case 2:  // Fixing the case value from 3 to 2 for the "Request" tab
//         return <FriendsRequestList />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <Dialog
//       fullWidth
//       maxWidth="xs"
//       open={open}
//       keepMounted
//       onClose={handleClose}
//     >
//       <Stack p={2} sx={{ width: "100%" }}>
//         <Tabs value={value} onChange={handleChange} centered>
//           <Tab label="Explore" />
//           <Tab label="Friend" />
//           <Tab label="Request" />
//         </Tabs>
//       </Stack>
//       <Stack sx={{ height: "100%" }}>
//         <Stack spacing={1}>
//           {renderContent()}
//         </Stack>
//       </Stack>
//     </Dialog>
//   );
// };
const UsersList = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(FetchUsers());
  }, []);

  return (
    <>
      {users.map((el, idx) => {
        return <UserComponent key={idx} {...el} />;
      })}
    </>
  );
};

const FriendsList = () => {
  const dispatch = useDispatch();

  const { friends } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(FetchFriends());
  }, []);

  return (
    <>
      {friends.map((el, idx) => {
        return <FriendComponent key={idx} {...el} />;
      })}
    </>
  );
};

const RequestsList = () => {
  const dispatch = useDispatch();

  const { friendRequests } = useSelector((state) => state.app);
  console.log(friendRequests);

  useEffect(() => {
    dispatch(FetchFriendRequests());
  }, []);

  return (
    <>
      {friendRequests.map((el, idx) => {
        return <FriendsRequestComponent key={idx} {...el.sender} id={el._id} />;
      })}
    </>
  );
};

const Friends = ({ open, handleClose }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
    >
      {/* <DialogTitle>{"Friends"}</DialogTitle> */}
      <Stack p={2} sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Explore" />
          <Tab label="Friends" />
          <Tab label="Requests" />
        </Tabs>
      </Stack>
      <DialogContent>
        <Stack sx={{ height: "100%" }}>
          <Stack spacing={2.4}>
            {(() => {
              switch (value) {
                case 0: // display all users in this list
                  return <UsersList />;

                case 1: // display friends in this list
                  return <FriendsList />;

                case 2: // display request in this list
                  return <RequestsList />;

                default:
                  break;
              }
            })()}
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default Friends;
