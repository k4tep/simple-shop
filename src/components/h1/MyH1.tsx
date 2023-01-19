import React from 'react';
import classes  from "../h1/MyH1.module.css";

export function MyH1(props:object) {
    return(
        <h1 {...props} className={classes.h1}>
        </h1>
    )
}