import axios from "axios";
import { useEffect, useState } from "react";
const Chats = () => {
  const [Chats, setChats] = useState("Loading.....");
  const fetchchats = async () => {
    const fetchdata = await axios.get("http://localhost:5000/");
    console.log(fetchdata.data);
  };
  useEffect(() => {
    fetchchats();
  }, []);
  return (
    <>
      <div>Chats Page</div>
    </>
  );
};

export default Chats;
