import React from 'react';
import classes  from "../header/Header.module.css";
import { MyH1 } from '../h1/MyH1';
import { MyInput } from '../input/MyInput';
import { Burgir } from '../burgir/Burgir';


export function Header() {
    return(
        <div className={classes.header}>
            <div className={classes.header_container}>
                <div className={classes.content_left}>
                    <div className={classes.logo_container}>
                        <h1 className={classes.h1}>SimpleShop</h1>
                        <p className={classes.p}>Simple store - simple shopping</p>
                    </div>
                    <div className={classes.search_container}>
                        <MyInput placeholder='Search...'>
                        </MyInput>
                    </div>
                </div>
                <div className={classes.button_container}>
                    <img className={classes.img} src='6388405.png'></img>
                    <MyH1>Profile/Login</MyH1>
                        
                </div>
                <Burgir/>
            </div>
        </div>
        
    )
}