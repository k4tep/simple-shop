import React from 'react';
import classes  from "../button/MyButton.module.css";

export interface MyButtonProps {
    placeholder: string
    children: React.ReactNode
}

export function MyButton(props:MyButtonProps) {
    return(
        <button {...props} className={classes.button}>
        </button>
    )
}