import React from "react";
 function Projectitem({image,name}){
    return (
        <div className="projectitems">
style={{ backgroundImage: `url(${image})` }}
        className="main-image"
        </div>
    )
 }
 export default Projectitem