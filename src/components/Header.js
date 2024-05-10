import React, { useEffect, useState } from "react"
import {exploreData} from "../headerData/headerdata"
import {descriptionData} from "../headerData/headerdata"
import { images } from "../headerData/headerdata"
import RenderItems from "./RenderItems"
import "./header.css"

const Header=()=>{
    const [_isFastBtn,setFastBtn] =useState(false)
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setScrolled(scrollPosition > 100);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    },[]);

    return(
        <div className="">
        <div className="headerTop">
            {exploreData.map((item)=><RenderItems key={item.id} item={item} />)}
        </div>
            <div className="content-bar" >
             <div style={{marginRight:"5.2rem"}}>
                <img alt="googleImg" src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg" />
             </div>
                <h1 className="heading"> The browser <br /> built to be yours </h1>
             <div style={{position:"sticky",top: "50px",zIndex:"100"}}> 
                <div className="description" >
                    {descriptionData.map((item)=> <RenderItems setFastBtn={setFastBtn} item={item} key={`item-${item.id}`} />)}
                </div>
             </div>
             <div className="download">
                <p className="chromeText">Need The Chrome Installer?</p>

                <span>
                    <button className="download"> Download Here </button>
                </span>
             </div>

            </div>

    <div className="image-slider">
      <div className={`image-container ${scrolled ? 'scrolled' : ''}`}>
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.imageUrl}
            alt={`google ${index + 1}`}
            className={`image image-${index + 1}`}
          />
        ))}
      </div>
    </div>
    {/* {isFastBtn && <FastBtn /> } */}
    </div>
    )

}
export default Header