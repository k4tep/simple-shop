import React from "react";
import { MyButton } from "../../button/MyButton";
import { MyH1 } from "../../h1/MyH1";
// import { MyDiv } from '../../div/MyDiv';
import { MyInput } from "../../input/MyInput";
import classes from "../LoginSignup/Login-Signup.module.css";
import { useNavigate } from "react-router-dom";

export function LoginSignup() {
    const navigate = useNavigate();
    function navigateToProductsList() {
        navigate("/");
    }
    return (
        <div className={classes.main_container}>
            <div className={classes.container_for_img}>
                <img className={classes.img_login} src="20221120001843.png" alt="img-login"></img>
            </div>
            <div className={classes.container_login}>
                <MyH1>
                    Welcome<br></br>to
                </MyH1>
                <h1 className={classes.h1}>SimpleShop</h1>
                <div className={classes.container_for_inputs}>
                    <h3 className={classes.h3}>Login/Signup</h3>
                    <MyInput placeholder="Email" children={undefined}></MyInput>
                    <MyInput placeholder="Password" children={undefined}></MyInput>
                    <MyInput placeholder="Nickname" children={undefined}></MyInput>
                    <MyButton onClick={navigateToProductsList} placeholder="Login/Signup">
                        Login/Signup
                    </MyButton>
                    <p onClick={navigateToProductsList} className={classes.p}>
                        I'll just take a look
                    </p>
                </div>
            </div>
        </div>
    );
}
