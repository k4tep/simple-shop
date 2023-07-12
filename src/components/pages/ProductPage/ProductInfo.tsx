import React, { useState } from "react";
import { MyDiv } from "../../div/MyDiv";
import { ImgPopUp } from "../../popup/popupImg";
import { Header } from "../../header/Header";
import classes from "../ProductPage/ProductInfo.module.css";
import { useNavigate } from "react-router-dom";

export function ProductInfo() {
    let descriptionText = `Product Description. May contain li clauses or plain text description. If
    the description is too long, the description will be shortened and a "Show
    more" button will appear. In general, the objects of description are
    perceptual patterns - qualities (shapes, directions, color, sound, weight,
    temperature, etc.), quantitative aspects (measures and sets) and their
    relationships, more specifically, these are objects, processes, life,
    character of people, etc. other objects of living, inanimate nature and
    subjective experiences themselves. A complex object/phenomenon forms an
    abstract semantic type in the mind of the subject, which is used by him in
    the future for description. The description always follows the time of
    observation of the object, in a general chain consisting of the act of
    perception, recollection, representation, comprehension and formulation in
    accessible language terms. That. description is a product of mental
    processing of a holistic image of a scene/situation, a subjective symbolic
    interpretation of a fragment of reality.`;

    const [description, setDescription] = useState(
        descriptionText.length > 190 ? descriptionText.slice(0, 182) + "..." : descriptionText
    );

    const imgArray: string[] = ["20221219213559.png", "20221219213624.png", "20221120001843.png"];

    const [imgNum, setImgNum] = useState(0);
    const [imgOpen, setimgOpen] = useState(false);

    function goToLeft() {
        if (imgNum === 0) {
            setImgNum(2);
        } else {
            setImgNum(imgNum - 1);
        }
    }

    function goToRight() {
        if (imgNum === 2) {
            setImgNum(0);
        } else {
            setImgNum(imgNum + 1);
        }
    }

    let reviewsCount: any[] = [];
    for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
        reviewsCount.push(
            <p className={classes.reviews} key={i}>
                TestReviews {i}
            </p>
        );
    }

    const navigate = useNavigate();
    function navigateToProductsList() {
        navigate("/");
    }

    return (
        <div className={classes.main_body}>
            <ImgPopUp imgsrc={imgArray[imgNum]} open={imgOpen} close={setimgOpen} />
            <Header />
            <div className={classes.product_container}>
                <div className={classes.product_categories}>
                    <img
                        onClick={navigateToProductsList}
                        className={classes.arrow_img}
                        src="2413271_left.png"
                    ></img>
                    <h3 className={classes.h3}>Categories: GenshinImpact/ Raiden Ei</h3>
                </div>
                <div className={classes.product_data_container}>
                    <div className={classes.product_data_left}>
                        <img
                            onClick={goToLeft}
                            className={classes.arrow_img}
                            src="2413271_left.png"
                        ></img>
                        <div className={classes.product_photos_container}>
                            <div className={classes.product_photo_box}>
                                <img
                                    onClick={() => setimgOpen(true)}
                                    className={classes.product_photo}
                                    src={imgArray[imgNum]}
                                ></img>
                            </div>
                            <div className={classes.product_photos_list}>
                                <img
                                    onClick={() => {
                                        setImgNum(0);
                                    }}
                                    className={classes.product_photos}
                                    src={imgArray[0]}
                                ></img>
                                <img
                                    onClick={() => {
                                        setImgNum(1);
                                    }}
                                    className={classes.product_photos}
                                    src={imgArray[1]}
                                ></img>
                                <img
                                    onClick={() => {
                                        setImgNum(2);
                                    }}
                                    className={classes.product_photos}
                                    src={imgArray[2]}
                                ></img>
                            </div>
                        </div>
                        <img
                            onClick={goToRight}
                            className={classes.arrow_img}
                            src="2413271_right.png"
                        ></img>
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
                            <h1 className={classes.info_text}>Reviews {reviewsCount.length}</h1>
                            {reviewsCount}
                        </div>
                    </div>
                </div>
                <MyDiv>
                    <h1 className={classes.info_text}>Description</h1>
                    <p className={classes.description}>{description}</p>
                    {descriptionText.length > 180 ? (
                        description.length > 190 ? (
                            <p
                                onClick={() =>
                                    setDescription(descriptionText.slice(0, 182) + "...")
                                }
                                className={classes.descriptionBtn}
                            >
                                Show less
                            </p>
                        ) : (
                            <p
                                onClick={() => setDescription(descriptionText)}
                                className={classes.descriptionBtn}
                            >
                                Show more
                            </p>
                        )
                    ) : undefined}
                </MyDiv>
            </div>
        </div>
    );
}
