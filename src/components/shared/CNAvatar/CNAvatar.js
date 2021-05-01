import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useAvatarStyles = makeStyles((theme)=>{
    return{
      root: (props) => ({
          display: 'flex',
          position:"relative",
          '&::after': {
            position: "absolute",
            borderRadius:"50%",
            display: "block",
            width: "43px",
            height: "43px",
            bottom: "2px",
            right: "-4px",
            zIndex: "100",
            color: "#fff",
            fontSize: "47px",
            lineHeight: "62px",
            textAlign: "center",
            content: "'“'",
            backgroundColor:"#FF3779",  
            boxSizing:"border-box"
          },
          
      }),

      avatar:(props) => ({
        position:"relative",       
        border: props.type==='large'? "5px solid #fff" : "",
        width: props.type==='large'? "110px" : "40px",
        height: props.type==='large'? "110px" : "40px", 
        boxShadow: "0 0 50px 0 rgb(0 0 0 / 12%)", 
        maxWidth: "100%",
      }),
        
    }
    
})

export const CNAvatar = ({ type, ...rest }) =>{
    const avatarStyles = useAvatarStyles({type});
    return(   
      type==="large" ?    
        <div className={avatarStyles.root} >
          <Avatar alt="avt1"   
            className={avatarStyles.avatar} 
            {...rest}
          />      
        </div>
      : 
        <div >
          <Avatar alt="avt1"   
            className={avatarStyles.avatar} 
            {...rest}
          />      
        </div>
    )
}
