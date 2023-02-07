import React from "react";
import style from "./contentItem.module.scss";
function ContentItem({ srcImg }) {
    return (
        <div className={style["content-group-item"]}>
            <p className={style["content-group-item-title"]}>
                Lorem ipsum dolor sit amet
            </p>
            <p className={style["content-group-item-content"]}>
                <img
                    src={srcImg}
                    alt=""
                    className={style["content-group-item-img"]}
                />
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non dui sodales, faucibus libero ut, posuere felis. Donec
                    imperdiet suscipit accumsan. Aenean consequat condimentum
                    velit ut tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices liquam egestas nunc at ullamcorper
                    ultricies. Donec feugiat velit nulla, vel sodales est
                    ullamcorper id. Aenean consequat condimentum velit ut
                    tempor. Nam porta massa in metus bibendum congue.
                    Pellentesque ultrices vestibulum mattis.
                </span>
            </p>
        </div>
    );
}

export default ContentItem;
