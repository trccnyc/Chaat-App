import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../componets/Chatbox";
import MyChats from "../componets/MyChats";
import SideDrawer from "../componets/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chats = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chats;