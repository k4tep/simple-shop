import React from "react";
import classes from "../popup/popupImg.module.css";

export function ImgPopUp(params: any) {
    return (
        <div className={params.open ? classes.container_open : classes.container_close}>
            <img
                onClick={() => {
                    params.close(false);
                }}
                className={classes.close_btn}
                src="image_processing20200511-32371-1owpt6i.png"
                alt="Close"
            />
            <div>
                <img className={classes.img} src={params.imgsrc} alt="" />
            </div>
        </div>
    );
}
