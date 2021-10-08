import React from "react";

const Header = () =>{
    
    const client = "android";

    

    const title = {
        web : "Welcome To Web Area ",
        others : "Welcome to development area"
    }

   
    return (
        <div className="navbar bg-dark rounded text-white"> 
            <h2> {  client === "web" ? title.web : title.others } </h2>
        </div>

    );
        
    
}

export default Header ;