import { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Post from "./Post";
import { db } from "./Firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPost] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div style={{ flex: 0.4 }} className=" mx-5 w-full">
      <div className="bg-white p-2 pb-2 rounded-lg mb-4 gap-5">
        <div className="border border-gray-400 bg-white hover:bg-[#EBEBEB] rounded-full px-6 flex py-3 w-full">
          <CreateIcon className="text-gray-600" />
          <form className="flex items-center justify-center w-full">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border-none flex-1 ml-2 font-semibold text-lg outline-none bg-transparent placeholder:text-gray-500"
              type="text"
              placeholder="Start a post"
            />
            <button
              onClick={sendPost}
              className="bg-blue-600 px-3 py-2 rounded-full text-white hidden"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div className="flex justify-evenly">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={VideoLibraryIcon} title="Video" color="#c1121f" />
          <InputOption Icon={CalendarMonthIcon} title="Event" color="#C37D16" />
          <InputOption
            Icon={AssignmentIcon}
            title="Write Article"
            color="#E06847"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
