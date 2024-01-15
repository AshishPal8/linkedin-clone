import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ Icon, title, avatar, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center text-gray-600 hover:text-black mx-2 px-4"
    >
      {Icon && <Icon className="" />}
      {avatar && <Avatar className="">{user?.displayName[0]}</Avatar>}
      <h3 className="text-xs">{title}</h3>
    </div>
  );
}

export default HeaderOption;
