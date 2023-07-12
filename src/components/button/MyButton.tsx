import React from "react";
import classes from "../button/MyButton.module.css";

export function MyButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button {...props} className={classes.button}></button>;
}
