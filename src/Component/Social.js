import React, { Component } from "react";
import SocialItem from "./SocialItem";

class Social extends Component {
    render(){
        return (
            <div className='row'>
                <ul className="list-group row" >
                    <SocialItem 
                        obj ={{
                         site : 'Facebook' ,
                         id : 'facebook' ,
                         img : 'https://picsum.photos/204',
                        }}
                    />
                    <SocialItem 
                    obj ={{
                        site : 'Youtube' ,
                        id : 'youtube' ,
                        img : 'https://picsum.photos/203' ,
                    }}
                    />
                    <SocialItem 
                    obj = {{
                        site : 'Instagram' ,
                        id : 'instagram',
                        img :'https://picsum.photos/202',
                    }}
                    />
                    <SocialItem 
                    obj = {{
                        site : 'Whatsapp' ,
                        id : 'whatsapp' ,
                        img  : 'https://picsum.photos/201',
                    }}
                        
                    />
                    
                 </ul>
                
            </div>
            
        );
    }
}

export default Social;