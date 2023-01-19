import React from 'react';
import { MyButton } from '../../button/MyButton';
import { MyH1 } from '../../h1/MyH1';
// import { MyDiv } from '../../div/MyDiv';
import { MyInput } from '../../input/MyInput';
import classes  from "../LoginSignup/Login-Signup.module.css";

export function LoginSignup() {
    return(
        <div className= {classes.main_container}>
            <div className= {classes.container_for_img}>
                <img className= {classes.img_login} src="/static/media/20221120001843.df99bcb05945432da2f3.png" alt='img-login'></img>
            </div>
            <div className= {classes.container_login }>
                <MyH1>Welcome<br></br>to</MyH1>
                <h1 className= {classes.h1}>SimpleShop</h1>
                <div className= {classes.container_for_inputs}>
                        <h3 className= {classes.h3}>Login/Signup</h3>
                        <MyInput placeholder="Email">
                        </MyInput>
                        <MyInput placeholder="Password">
                        </MyInput>
                        <MyInput placeholder="Nickname">
                        </MyInput>
                        <MyButton placeholder="Login/Signup">Login/Signup</MyButton>
                        <p className= {classes.p}>I'll just take a look</p>
                </div>
            </div>
        </div>
    )
}