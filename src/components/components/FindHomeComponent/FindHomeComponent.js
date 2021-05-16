import React from 'react';
import styled from "styled-components"
import homeBackground from "@Assets/background/homeBg.jpg"

const Container=styled.section`
background-image: url(${homeBackground});
height:105vh;
background-size: cover;
background-repeat: no-repeat;
overflow:hidden;
background-position:center center;
`



export const FindHomeComponent=(props)=>{
console.log(homeBackground);
return (
<>
<Container>
    
</Container>
</>
)


}