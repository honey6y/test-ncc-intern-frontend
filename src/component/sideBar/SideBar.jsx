import React from "react";
import SideBarItem from "./component/SideBarItem";
import style from "./sideBar.module.scss";
function SideBar() {
    return (
        <div className={style["sidebar-wrapper"]}>
            <SideBarItem className={["sidebar-item", "home"]} text={"Home"} />
            <SideBarItem className={["sidebar-item"]} text={"Services"} />
            <SideBarItem
                className={["sidebar-item", "active"]}
                text={"News"}
                mouse
            />
            <SideBarItem className={["sidebar-item"]} text={"Blog"} />
            <SideBarItem className={["sidebar-item"]} text={"Contact"} />
        </div>
    );
}

export default SideBar;
