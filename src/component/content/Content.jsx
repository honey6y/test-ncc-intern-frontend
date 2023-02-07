import React from "react";
import ContentItem from "./component/ContentItem";
import style from "./content.module.scss";

function Content() {
    return (
        <div className={style["content-wrapper"]}>
            <div className={style["content-logo-wrapper"]}>
                <img
                    src="./logoNCC1.png"
                    alt=""
                    className={style["content-logo-img"]}
                />
            </div>
            <div className={style["content-group1"]}>
                <p className={style["content-group1-title"]}>
                    Lorem ipsum dolor sit asmet?
                </p>
                <p className={style["content-group1-para"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    tristique consequat placerat. Vestibulum auctor pellentesque
                    sem, eu posuere erat hendrerit quis. Maecenas vel consequat
                    turpis. Nam facilisis, ligula in mattis sodales, augue justo
                    tristique nulla, sed lacinia ante eros ut mi. Morbi vitae
                    diam augue. Aliquam vel mauris a nibh auctor commodo.
                    Praesent et nisi eu justo eleifend convallis. Quisque
                    suscipit maximus vestibulum. Phasellus congue mollis orci,
                    sit amet luctus augue tristique eu. Donec vulputate odio
                    neque, sed semper turpis pellentesque a.
                </p>
            </div>
            <div className={style["content-group-wrapper"]}>
                <ContentItem srcImg={"./css-icon1.png"} />
                <ContentItem srcImg={"./html-icon1.png"} />
                <ContentItem srcImg={"./url-icon1.png"} />
            </div>
        </div>
    );
}

export default Content;
