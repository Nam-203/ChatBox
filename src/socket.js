import io from "socket.io-client"
let socket ;
const connectSocket = (user_id)=>{
    socket = io.connect("http://localhost:3001",{
        query:`user_id=${user_id}`
    })
}

export {socket, connectSocket}