import React from 'react';
import classes  from "../div/MyDiv.module.css";

export interface MyDivProps {
    children: React.ReactNode
}

export function MyDiv(props:MyDivProps) {
    return(
        <div {...props} className={classes.div}>
        </div>
    )
}