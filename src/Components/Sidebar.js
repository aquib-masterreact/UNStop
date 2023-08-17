import {
  faBars,
  faDashboard,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "../styles.css";

const Sidebar = () => {
  const [sideb, setSideb] = useState(true);
  return (
    <div className="sidecont" style={{ width: sideb ? "3%" : "100%" }}>
      <span
        className="menu"
        style={{ display: sideb ? "none" : "block" }}
        onClick={() => {
          setSideb(true);
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </span>
      <div
        id="mySidenav"
        className="sidenav"
        style={{ display: sideb ? "block" : "none" }}
      >
        <li
          href="#"
          className="closebtn"
          onClick={() => {
            setSideb(false);
          }}
        >
          &times;
        </li>
        <li>
          <FontAwesomeIcon icon={faDashboard} />
          Dashboard
        </li>
        <li className="activebtn">
          <FontAwesomeIcon icon={faFolderOpen} />
          Assesments
        </li>
        <li>
          <FontAwesomeIcon icon={faFolderOpen} />
          My Library
        </li>
      </div>
    </div>
  );
};
export default Sidebar;
