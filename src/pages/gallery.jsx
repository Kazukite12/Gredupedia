import React, { useState } from "react";
import "./Gallery.css"
import ProductCategory from "../dataDummy/productCategory";
import Product from "../dataDummy/product";

const Gallery =()=> {
    const [selectedCategory, setSelectedCategory] = useState(null)
    return (
        <div id="gallery">
            <div className="gallery-container">
            <div className="side-bar">
                {ProductCategory.map((item,i)=> {
                    return (
                        <p className={selectedCategory==i?"active-category":""} onClick={()=>setSelectedCategory(i)}>{item.category}</p>
                    )
                })}
                
            </div>

            <div className="product-container">
                {Product.map((item,i)=> {
                    return (
                        <div></div>
                    )
                })}
            </div>
                <div></div>
        </div>

        </div>
        
    )
}

export default Gallery