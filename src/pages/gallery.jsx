import { useState, useRef, useEffect } from "react";
import "./Gallery.css"
import ProductCategory from "../dataDummy/productCategory";
import Product from "../dataDummy/product";

import { MdViewList } from "react-icons/md";
import { MdViewModule } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { IoFilterSharp } from "react-icons/io5";

import { HiXMark } from "react-icons/hi2";


const Gallery =()=> {
    const [selectedCategory, setSelectedCategory] = useState(null)

    const [viewMode, setViewMode] = useState('gallery')

    const [activeFilterPanel, setActiveFilterPanel] = useState(false)

    const scrollPosition = useRef(0);
    const galleryContainerRef = useRef(null);

    // Store the current scroll position before switching view modes
    const handleViewSwitch = (mode) => {
        if (galleryContainerRef.current) {
            scrollPosition.current = galleryContainerRef.current.scrollTop;
        }
        setViewMode(mode);
    };

    // Restore the scroll position after the view mode changes
    useEffect(() => {
        if (galleryContainerRef.current) {
            galleryContainerRef.current.scrollTop = scrollPosition.current;

           
        }
    }, [viewMode]);

    const navigate = useNavigate()

    const detail =()=> {
        navigate("/gallery/detail")
    }


    return (
        <div id="gallery">
            <div className={activeFilterPanel?"filter-panel":"filter-panel close"}>
                <div className="filter-exit">
                    <HiXMark onClick={()=>setActiveFilterPanel(false)} />
                
                </div>
                <div className="filter-panel-container">
                {ProductCategory.map((item,i)=> {
                    return (
                        <p className={selectedCategory==i?"category-item active-category":"category-item"} onClick={()=>setSelectedCategory(i)}>{item.category}</p>
                    )
                })}

                </div>

            </div>
            <div className="gallery-nav">
                <IoFilterSharp onClick={()=>setActiveFilterPanel(true)} className="option-icon filter-icon"/>
                <div className="view-option">
                    <MdViewList className={viewMode=="gallery"?"option-icon-active":"option-icon"} onClick={()=>handleViewSwitch('gallery')}/>
                    <MdViewModule className={viewMode=="list"?"option-icon-active":"option-icon"} onClick={()=>handleViewSwitch('list')}/>
                    
                </div>
            </div>
            <div className="gallery-container">
            <div className="side-bar">
                {ProductCategory.map((item,i)=> {
                    return (
                        <p className={selectedCategory==i?"category-item active-category":"category-item"} onClick={()=>setSelectedCategory(i)}>{item.category}</p>
                    )
                })}
                
            </div>
       
          

            <div className={viewMode === "gallery" ? "product-container-image-mode" : "product-container-list-mode"} >
    {Product.map((item, i) => (
        <div key={i} className="product-wrapper">
            {viewMode === "gallery" ? (
                <div className="product-image-mode-content">
                
                </div>
            ) : (
                <div onClick={detail} className="product-list-mode-content">
                    {/* List mode content here */}
                    <div className="product-image"></div>
                    <div>
                        <h3>{item.title}</h3>
                        <p>By: {item.author}</p>
                    </div>
                </div>
            )}
        </div>
    ))}
</div>
     
         

          
                <div></div>
        </div>

        </div>
        
    )
}

export default Gallery