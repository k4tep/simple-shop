import React from "react";
import { MyDiv } from "../div/MyDiv";
import classes from "../productDiv/ProductDiv.module.css";
import { useNavigate } from "react-router-dom";

export function ProductsDiv() {
    const navigate = useNavigate();
    function navigateToProduct() {
        navigate("/product");
    }
    return (
        <MyDiv onClick={navigateToProduct}>
            <img className={classes.product_img} src="20221219213559.png" alt="" />
            <div className={classes.product_info}>
                <h1 className={classes.info_name}>Raiden Shogun</h1>
                <p className={classes.p}>★ 4.9</p>
                <h3>3000$</h3>
            </div>
        </MyDiv>
    );
}
