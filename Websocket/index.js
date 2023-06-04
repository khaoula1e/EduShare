const io = require("socket.io")(8800, {
  cors: {
    origin: "http://192.168.137.1:3000",
  },
});

let activeUsers = [];

io.on("connection", (socket) => {
  // add new User
  socket.on("new-user-add", (newUserId) => {
    // if user is not added previously
    if (
      !activeUsers.some((user) => user.userId === newUserId) &&
      newUserId != null
    ) {
      activeUsers.push({ userId: newUserId, socketId: socket.id });
      console.log("New User Connected", activeUsers);
    }
    // send all active users to new user
    io.emit("get-users", activeUsers);
  });

  socket.on("disconnect", () => {
    // remove user from active users
    activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);

    console.log("User Disconnected", activeUsers);
    // send all active users to all users
    io.emit("get-users", activeUsers);
  });

  // send message to a specific user
  socket.on("send-message", (data) => {
    const { receiverId } = data;
    const { senderId } = data;
    console.log(activeUsers);
    console.log(data);

    console.log("Sending from socket to :", receiverId);
    console.log("Data: ", data);

    io.emit("recieve-message", data);
    io.emit("message-notification", data);
  });
});