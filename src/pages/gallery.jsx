import { useState } from "react";
import "./Gallery.css"
import ProductCategory from "../dataDummy/productCategory";
import Product from "../dataDummy/product";

import { MdViewList } from "react-icons/md";
import { MdViewModule } from "react-icons/md";

const Gallery =()=> {
    const [selectedCategory, setSelectedCategory] = useState(null)

    const [viewMode, setViewMode] = useState('gallery')

    return (
        <div id="gallery">
            <div className="gallery-nav">
                <div className="view-option">
                    <MdViewList className={viewMode=="gallery"?"option-icon-active":"option-icon"} onClick={()=>setViewMode('gallery')}/>
                    <MdViewModule className={viewMode=="list"?"option-icon-active":"option-icon"} onClick={()=>setViewMode('list')}/>
                </div>
            </div>
            <div className="gallery-container">
            <div className="side-bar">
                {ProductCategory.map((item,i)=> {
                    return (
                        <p className={selectedCategory==i?"active-category":""} onClick={()=>setSelectedCategory(i)}>{item.category}</p>
                    )
                })}
                
            </div>
            {viewMode == 'gallery'?
          <div className="product-container-image-mode">
          {Product.map((item,i)=> {
              return (
                  <div></div>
              )
          })}
      </div> :
            <div className="product-container-list-mode">
            {Product.map((item,i)=> {
                return (
                    <div className="product-wrapper">
                        <div className="product-image"></div>
                        <div>
                        <h3>Lorem Ipsum</h3>
                        <p>By : Lorem ipsum dolor sit amet.</p>

                        </div>
                    </div>
                )
            })}

        </div>
        }

         

          
                <div></div>
        </div>

        </div>
        
    )
}

export default Gallery