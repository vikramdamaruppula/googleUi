import React from "react"

const FastBtn =()=>{
    return(
        <div>
            <div style={{textAlign:"center"}}>
              <div className="content-container">
                <h2 className="heading">The 
                <div className="span-container">
                <span className="fast"> fast </span>
                </div>
                 way to do <br />things online
               </h2>
              </div>
               <div className="performance-container">
                    <div className="performance-content">
                        <h3 className="performance"> Prioritize <br /> Performance</h3>
                    </div>
                    <div>
                        <p className="chrome">Chrome is built for performance. Optimize your experience with features like Energy Saver and Memory Saver.</p>
                        <a className="extra" href="https://blog.google/products/chrome/new-chrome-features-to-save-battery-and-make-browsing-smoother/"> 
                            Learn more about Memory and Energy 
                        </a>
                    </div>
                </div>
                <div className="image-content">
                 <video width="640" height="480" autoplay poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb_KHYOAfZsZNREpmZ_zdWP9VupkYhvGbXxAgBCzK1QA&s" style={{translate: 'none',rotate: 'none',scale: 'none', width: '100%',transform: 'translate(0px, 0px)',boxShadow: 'rgba(32, 33, 36, 0.1) 0px 8px 20px 0px'}}>
                    <source type="video/webm" src="https://www.pexels.com/video/waves-rushing-to-the-shore-1321208/"></source>
                    <source type="video/mp4"  src="https://www.pexels.com/video/road-trip-4434242/"></source>
                 </video>
                 </div>
            </div>
        </div>
    )
}

export default FastBtn