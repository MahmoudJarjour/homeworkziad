import React from "react";
import { Link } from "react-router-dom";

const TeamMember= (props)=>{

    return (
       <div className="clo-md-4 col-sm-4 container " > 
                    <div className="card"  style={{backgroundColor: props.website ? "white" : "gray" }}>  
                        <div>
                            <Link  to='/social'>
                                <div className="card-header">
                                    
                                    <img src={props.img} alt={props.img} style={{maxWidth:'100%'}}/>
                                    
                                </div>
                                <div className="card-body">
                                    <h3>{`Name: ${props.name} ${props.nick}`}</h3>
                                    <p>{`Address: ${props.address}`}</p>
                                    <div style={{color:props.email ? "blue" : "red"}}>{`Email: ${props.email}`}</div>
                                    <div>{`Phone Number: ${props.phone}`}</div>
                                    <div>{`Website: ${props.website}`}</div>
                                </div>   
                            </Link> 
                        </div>
                    </div>
           
       </div>


    )
}

export default TeamMember