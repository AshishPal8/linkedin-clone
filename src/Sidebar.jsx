import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="flex text-sm font-semibold text-gray-500 cursor-pointer pb-2">
      <span>#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div
      style={{ flex: 0.2 }}
      className="sidebar sticky top-20 rounded-lg text-center h-fit"
    >
      <div className="flex flex-col items-center border border-b-0 border-gray-300 rounded-tr-lg rounded-tl-lg bg-white pb-2 overflow-hidden">
        <img
          className="mb-[-20px] w-full h-20 object-cover"
          src="https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704153600&semt=ais"
          alt=""
        />
        <Avatar src={user.photoUrl} className="mb-3">
          {user.displayName[0]}
        </Avatar>
        <h2 className="text-lg font-semibold">{user.displayName}</h2>
        <h4 className="text-sm text-gray-500">{user.email}</h4>
      </div>
      <div className="bg-white p-2 mb-2 border border-gray-300 rounded-br-lg rounded-bl-lg">
        <div className="mt-2 flex justify-between">
          <p className="text-gray-600 text-sm font-semibold">Profile Viewers</p>
          <p className="text-blue-700 text-base font-bold">2,023</p>
        </div>
        <div className="mt-2 flex justify-between">
          <p className="text-gray-600 text-sm font-semibold">Connections</p>
          <p className="text-blue-700 text-base font-bold">501</p>
        </div>
      </div>
      <div className="text-left p-2 border border-gray-400 bg-white rounded-lg">
        <p className="text-md  font-bold cursor-pointer pb-2">Recents</p>
        {recentItem("ReactJS")}
        {recentItem("Frontend Development")}
        {recentItem("Backend Development")}
        {recentItem("Design")}
      </div>
    </div>
  );
}

export default Sidebar;
