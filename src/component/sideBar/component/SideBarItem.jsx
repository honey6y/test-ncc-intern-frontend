import React from "react";
import style from "./sideBarItem.module.scss";
function SideBarItem({ className, text, mouse }) {
    let classComponent = className.map((item) => style[item]);
    classComponent = classComponent.join(" ");
    return (
        <div className={classComponent}>
            {text}
            {mouse ? (
                <span className={style["sidebar-item-mouseimg"]}>
                    <img src="./Untitled-11.png" alt="" />
                </span>
            ) : null}
        </div>
    );
}

export default SideBarItem;
