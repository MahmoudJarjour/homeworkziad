import React from "react";



const SocialItem = (props) => {


    return (
        <div  className="list-group-item clo-md-4  col-sm-4 border container  ">
            
            <li style={{listStyle:"none"}}>
                        <img src={props.obj.img} alt={`icon of ${props.obj.site}`}/>
                        <input type="checkbox" id={props.obj.id}/>
                        <label htmlFor={props.obj.id}> {props.obj.site} </label>
            </li>
           
        </div>
    );
} 
export default SocialItem