import React from 'react';
import {usePropertyContext,withPropertyContext} from "./PropertyContext";

 const PropertyMainPage=(props)=>{
const value=usePropertyContext();
console.log("value",value);
return (
<div>
    List main page
</div>
)


}



export default withPropertyContext(PropertyMainPage)