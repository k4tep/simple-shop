import React from 'react';
import classes  from "../input/MyInput.module.css";

export interface MyInputProps {
    placeholder: string
    children: React.ReactNode
}

export function MyInput(props:MyInputProps) {
    return(
        <input {...props} className={classes.input}>
        </input>
    )
}
