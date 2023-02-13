import React from 'react';
import { Header } from '../../header/Header';
import {ProductsDiv} from '../../productDiv/ProductDiv'
import classes  from "../ProductsPage/ProductsList.module.css";


export function ProductsList() {
    let productsCount = [];
    let filterCount: any[] = [];
    for (let i = 0; i < Math.floor(Math.random() * 30); i++) {
        productsCount.push(<ProductsDiv/>)
    }
    for (let i = 0; i < Math.floor(Math.random() * 60); i++) {
        if(i % 5 === 0){
            filterCount.push(<div className={classes.filter_container}>
                <input type={'checkbox'}/>
                <label className={classes.filter_label}>Filter{i}</label>
            </div>)
        }else {
            filterCount.push(<div className={classes.filter_container}>
                <input type={'radio'}/>
                <label className={classes.filter_label}>Filter{i}</label>
            </div>)
        }
        
    }
    return(
        <div className={classes.main_body}>
            <Header/>
            <div className={classes.products_container}>
                <input className={classes.filter_btn} type={'checkbox'} id="filter__toggle"/>
                <div  className={classes.filtersList_container}>
                    <h3 className={classes.h3}>Filters {filterCount.length}</h3>
                    {filterCount}
                </div>
                <div className={classes.productsList_container}>
                    <div className={classes.productsList_info}>
                        <label className={classes.filter_ico} htmlFor={"filter__toggle"}>
                            <img className={classes.open_filter_img} src='317-3175538_png-file-filter-list-icon-transparent-png.png'></img>
                            <img className={classes.close_filter_img} src='image_processing20200511-32371-1owpt6i.png'></img>
                        </label>
                        <h3 className={classes.h3}>Categories: GenshinImpact {productsCount.length}</h3>
                        <select className={classes.sort_select} name="Sort" id="sort-select">
                            <option className={classes.select_option} value="Expensive">Expensive</option>
                            <option className={classes.select_option} value="Сheap">Сheap</option>
                            <option className={classes.select_option} value="Low reviews">Low reviews</option>
                            <option className={classes.select_option} selected value="High reviews">High reviews</option>
                        </select>
                    </div>
                    <div className={classes.product_list}>
                        {productsCount}
                    </div>
                    <button className={classes.btn}>Next 30 products</button>
                </div>
            </div>
        </div>
    )
}