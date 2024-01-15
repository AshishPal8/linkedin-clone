import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkIcon from "@mui/icons-material/Work";
import SmsIcon from "@mui/icons-material/Sms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./Firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="w-full bg-white flex justify-evenly items-center border-[0.1px] border-gray py-2 sticky top-0 z-50">
      <div className="flex h-10">
        <img
          className="w-10 object-contain h-10 mr-3"
          src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
          alt=""
        />
        <div className="header__search bg-[#EDF3F8] flex justify-center items-center px-2 rounded">
          <SearchIcon className="mx-2" />
          <input
            className="border-none outline-none bg-transparent"
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center cursor-pointer">
        <HeaderOption Icon={HomeIcon} title={"Home"} />
        <HeaderOption Icon={PeopleAltIcon} title={"My Network"} />
        <HeaderOption Icon={WorkIcon} title={"Jobs"} />
        <HeaderOption Icon={SmsIcon} title={"Messaging"} />
        <HeaderOption Icon={NotificationsIcon} title={"Notification"} />
        <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
