import "./detail.css";
import contohGambar from "../assets/assetTema/masa-1.png";
import about from "../assets/about-background.png";
import ProductDetail from "../dataDummy/product-detail";
import MediaSlider from "../components/mediaSlider";

const Detail = () => {
    return (
        <>
        
            <div id="detail">
                <img src={about} className="img-detail-background" />
                <div className="detail-container">
                    <div className="detail-nav-container">
                        {/* Navigation content (if any) */}
                    </div>
                 
                    <div className="detail-image-container">
                  
                                 
                    
                     <MediaSlider/>
                
                    </div>

                    <div className="detail-description-container">
                        <h1>{ProductDetail.title}</h1>
                        <p>by: {ProductDetail.creator}</p>
                        <p>{ProductDetail.description}</p>
                        <p>{ProductDetail.price}</p>
                    </div>
                  
                   
                </div>
             
           
              
            </div>
        </>
    );
};

export default Detail;
