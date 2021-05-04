import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Stretcher } from "@Components/components/Stretcher/Stretcher";


const useStyles = makeStyles((theme) => {
    return {
        style: {
            display:"flex",
            top:"0",
            left:"0",
            right:"0",
            bottom:"0",
            alignItems:"center",
            justifyContent:"center",
            position:"fixed"
        }
    }}      
)


const Message = ({ message }) => {
    const styles = useStyles();
   //const [selectValue,setSelecteValue]=useState(null);
const [checkBoxState,setCheckBoxState] = React.useState([
    {
        label: "all", value: "all", id: uuid(),isChecked:false
    },
    {
        label: "CheckBox1",value: "Huy", id: uuid(),
        isChecked:false
    },
    {
        label: "CheckBox2",value: "Pho", id: uuid(),
        isChecked:false
    },
    {
        label:"CheckBox3",value: "Dep trai", id: uuid(),
        isChecked:false
    },
    {
        label: "CheckBox4",value: "hihi", id: uuid(),
        isChecked:false
    },

]) 

    return (
        <>
            <Stretcher>

            </Stretcher>
        </>
    )

}

export default Message
