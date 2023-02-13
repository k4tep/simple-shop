import React from 'react';
import { MyButton } from '../../button/MyButton';
import { MyDiv } from '../../div/MyDiv';
import { MyInput } from '../../input/MyInput';
import { Header } from '../../header/Header';
import classes  from "../ProductPage/ProductInfo.module.css";


export function ProductInfo() {
    let reviewsCount: any[] = [];
    let descriptionCount: any[] = [];
    for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
        reviewsCount.push(<p>TestReviews {i}</p>)
    }
    for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
        if(i % 5 === 0){
            descriptionCount.push(<div className={classes.filter_container}>
                <input type={'checkbox'}/>
                <label className={classes.filter_label}>Description{i}</label>
            </div>)
        }else {
            descriptionCount.push(<div className={classes.filter_container}>
                <input type={'radio'}/>
                <label className={classes.filter_label}>Description{i}</label>
            </div>)
        }
        
    }
    return(
        <div className={classes.main_body}>
            <Header/>
            <div className={classes.product_container}>
                <div className={classes.product_categories}>
                    <img className={classes.arrow_img} src='2413271_left.png'></img>
                    <h3 className={classes.h3}>Categories: GenshinImpact/ Raiden Ei</h3>
                </div>
                <div className={classes.product_data_container}>
                    <div className={classes.product_data_left}>
                        <img className={classes.arrow_img} src='2413271_left.png'></img>
                        <div className={classes.product_photos_container}>
                            <div className={classes.product_photo_box}>
                                <img className={classes.product_photo} src='20221219213559.png'></img>
                            </div>
                            <div className={classes.product_photos_list}>
                                <img className={classes.product_photos} src='20221219213559.png'></img>
                                <img className={classes.product_photos} src='20221219213624.png'></img>
                                <img className={classes.product_photos} src='20221120001843.png'></img>
                            </div>
                        </div>
                        <img className={classes.arrow_img} src='2413271_right.png'></img>
                    </div>
                    <div className={classes.product_info_container}>
                        <div className={classes.container_top}>
                            <div className={classes.info_container}>
                                <h1 className={classes.info_name}>Raiden Shogun</h1>
                                <p className={classes.p}>★ 4.9</p>
                                <h3>3000$</h3>
                            </div>
                            <div className={classes.product_btn_container}>
                                <button className={classes.btn_cart}>Add to cart</button>
                                <button className={classes.btn_buy}>Buy</button>
                            </div>
                        </div>
                        <div className={classes.info_container_reviews}>
                            <h1 className={classes.info_text}>Reviews</h1>
                            {reviewsCount}
                        </div>
                    </div>
                </div>
                <MyDiv>
                    <h1 className={classes.info_text}>Description</h1>
                    {descriptionCount}
                </MyDiv>
            </div>
        </div>
    )
}