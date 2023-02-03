import React from 'react';
import classes  from "../burgir/Burgir.module.css";


export function Burgir() {
    // const check = document.getElementById('menu__toggle');

    return(
        <div className={classes.burgir_back}>
            <div className={classes.burgir_container}>
                <input className={classes.burgir_btn} type={'checkbox'} id="menu__toggle"/>
                <label className={classes.burgir_ico} htmlFor={"menu__toggle"}>
                    <span></span>
                </label>
                <ul className={classes.burgir_list}>
                    <li><a className={classes.list_item} href={'#'}>Profile/Login</a></li>
                    <li><a className={classes.list_item} href={'#'}>Shopping cart</a></li>
                </ul>
                
            </div>
        </div>
    )
}