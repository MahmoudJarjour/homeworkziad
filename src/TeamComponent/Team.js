import React from "react";
import TeamMember from "./TeamMember";
import TeamData from "./TeamData";



const Team=()=>{

    
    const Members =  TeamData.call().map(member =>
         <TeamMember 
            key={member.id}
            img={member.img}
            name={member.name}
            nick={member.nick}
            address={member.address}
            email={member.email}
            phone={member.phone}
            website={member.website}
            />
          
    );


    return (
        <div className="row" >
                {Members}
         </div>
        
    );
}

export default Team;