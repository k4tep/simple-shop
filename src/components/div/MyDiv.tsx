import React from "react";
import classes from "../div/MyDiv.module.css";

export function MyDiv(
    props: JSX.IntrinsicAttributes &
        React.ClassAttributes<HTMLDivElement> &
        React.HTMLAttributes<HTMLDivElement>
) {
    return <div {...props} className={classes.div}></div>;
}
