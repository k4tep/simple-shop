import React from "react";
import classes from "../burgir/Burgir.module.css";
import { useNavigate } from "react-router-dom";

export function Burgir() {
    // const check = document.getElementById('menu__toggle');
    const navigate = useNavigate();
    function navigateToLogin() {
        navigate("/login");
    }
    return (
        <div className={classes.burgir_back}>
            <div className={classes.burgir_container}>
                <input className={classes.burgir_btn} type={"checkbox"} id="menu__toggle" />
                <label className={classes.burgir_ico} htmlFor={"menu__toggle"}>
                    <span></span>
                </label>
                <ul className={classes.burgir_list}>
                    <li onClick={navigateToLogin} className={classes.list_item}>
                        Profile/Login
                    </li>
                    <li className={classes.list_item}>Shopping cart</li>
                </ul>
            </div>
        </div>
    );
}
