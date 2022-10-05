import React from "react";

const Photo = (props) => { 
    console.log('ok');
    return (  
        <li>
            <img src={props.url} />
        </li> 
    );
}



export default Photo;