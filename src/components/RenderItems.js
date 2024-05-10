import React from "react"
import "./header.css"

const RenderItems=(item,setFastBtn)=>{
    console.log(item.item) 
    const handleButton=(e,id)=>{
        e.preventDefault()
        if(id==="10"){
            setFastBtn(true)
            console.log(id)
        }
    }
    return(
        <ul className="container" key={item?.item?.id}>
            {item?.item?.imageUrl && <li>  <img style={{width:40,paddingRight:"8px"}} alt="chrome" src={item?.item?.imageUrl} /> </li> }
            <li style={{marginTop:"8px"}} onClick={(e)=>handleButton(e,item.id)}>
                 <a href={item?.item.link}>{item?.item.name}</a>                         
             </li>
            {/* {item?.iconUrl && <li>  <img style={{width:40,paddingRight:"8px"}} alt="icon" src={item.imageUrl} /> </li> } */}

       </ul>
    )
}
export default RenderItems