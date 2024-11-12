import "./detail.css"
import contohGambar from "../assets/assetTema/masa-1.png"
import about from "../assets/about-background.png"

const Detail =()=> {
    return (
        <>
        <div id="detail">
            <img src={about} className="img-detail-background" />
            <div className="detail-container">
                <div className="detail-nav-container">

                </div>
                <div className="detail-image-container">
                    <img src={contohGambar}/>

                </div>
                <div className="detail-description-container">
                    <h1>Educhem Alchemy</h1>
                    <p>by: Ujang Ranger</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ullam reprehenderit, aspernatur velit ducimus inventore sequi aut nemo delectus in cum, incidunt, labore illum minima provident! Id alias voluptates incidunt. Odit, quis commodi. Maiores consequatur ab alias obcaecati expedita sit enim quos similique, illo eum deleniti doloribus dolores eaque temporibus.</p>
                    <p>085155341765 / akmal.@gmail.com</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Detail