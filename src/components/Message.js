import React, { useState } from "react";
import { SVGIcon } from "@Components/shared/SvgIcon/Icon";
import { makeStyles } from '@material-ui/core/styles';
import { CNSnackBar } from "./shared/CNSnackBar/CNSnackBar";
import FixedContainer from "@Components/shared/Layout/FixedContainer"
import { CNNotifications } from "@Components/shared/CNNotifications/CNNotifications";
import { CNSelect } from "@Components/shared/CNSelect/CNSelect";
import {CNSlider} from "@Components/shared/CNSlider/CNSlider"
const useStyles = makeStyles(theme => {
    return {
        root: (props) => {
            return {
               ...theme.typography.header 
            }
        }
    }
    console.log(theme);
})


 const Message = ({ message }) => {
    const styles = useStyles();
   const [selectValue,setSelecteValue]=useState(null);
   const [value, setValue] = React.useState([0, 37]);
   const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };



    return (
        <>
            <CNSlider value = {value} handleChange={handleChange}/>

        </>
    )

}

export default Message
