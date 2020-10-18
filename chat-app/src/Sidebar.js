import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";

import "./Sidebar.css";
import { DonutLarge, MoreVert, Chat, SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [room, setRoom] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  // const unsubscribe = db.collection("rooms").unsubscribe();
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRoom(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    // return () => {
    //   unsubscribe();
    // };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL} />
        {console.log("sdfsdfsdf ojnreg wun")}
        {console.log(user?.photoURL)}
        <div className="slider__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {room.map((rooms) => (
          <SidebarChat key={rooms.id} id={rooms.id} name={rooms.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
