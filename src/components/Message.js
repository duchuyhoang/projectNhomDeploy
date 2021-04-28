import React, { useState } from "react";
import { SVGIcon } from "@Components/shared/SvgIcon/Icon";
import { makeStyles } from '@material-ui/core/styles';
import { CNSnackBar } from "./shared/CNSnackBar/CNSnackBar";
import FixedContainer from "@Components/shared/Layout/FixedContainer"
import { CNButton } from "@Components/shared/CNButton/CNButton"


const useStyles = makeStyles(theme => { 
    return {
        btnStyle: {
            display: "flex",
            justifyContent:"center",
            right:"0",
            top:"0",
            bottom:"0",
            left:"0",
            position: "fixed", 
            alignItems: "center",
            flexDirection:"column",
    }
    }      
})


 const Message = ({ message }) => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(true);
    const [selectValue,setSelecteValue]=useState(null);

    const handleChange = e => {
      if(e===null)
        setSelecteValue(null)
      else
      setSelecteValue(e?.value)
      }
      

    return (
        <>
            
            <div className={classes.btnStyle}>
                <CNButton type="secondary" startIcon={<SVGIcon name="plus" width="12px" height="12px" />}></CNButton>
                <CNButton type="main"></CNButton>
            </div>

        </>
    )

}

export default Message
