import React from "react";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import "./css/Sidebar.css";
import { useStateValue } from "../common/StateProvider";
function Sidebar() {
  const [{ User }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow title="Rohit" src={User.photoURL} title={User.displayName} />
      <SidebarRow
        title="Covid 19 Information Center"
        Icon={LocalHospitalIcon}
      />
      <SidebarRow title="Pages" Icon={EmojiFlagsIcon} />
      <SidebarRow title="Friends" Icon={PeopleIcon} />
      <SidebarRow title="Messengers" Icon={ChatIcon} />
      <SidebarRow title="Market Place" Icon={StorefrontIcon} />
      <SidebarRow title="Videos" Icon={VideoLibraryIcon} />
      <SidebarRow title="More Info" Icon={ExpandMoreOutlinedIcon} />
    </div>
  );
}

export default Sidebar;
