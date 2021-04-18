import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useContainerStyles =makeStyles(
    (theme)=>{

return  {
    root:(props)=>{
        return {
            top:0,
            left:0,
            right:0,
            bottom:0,
            position:"fixed",
            backgroundColor:"#7C7D7D",
            zIndex:1000,
            display:"flex",
           ...props
        }
    }

    }
    
    
   



})


export default function FixedContainer({children,config}) {
    const containerStyles=useContainerStyles({...config});
    return (
      <>
        <Box classes={containerStyles}>
            {children}
        </Box>
      </>
    );
  }