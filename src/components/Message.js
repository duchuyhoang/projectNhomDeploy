import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CNSnackBar } from "./shared/CNSnackBar/CNSnackBar";
import FixedContainer from "@Components/shared/Layout/FixedContainer"
import { CNNotifications } from "@Components/shared/CNNotifications/CNNotifications";
import { CNSelect } from "@Components/shared/CNSelect/CNSelect";
import {CNCheckBox} from '@Components/shared/CNCheckBox/CNCheckBox';
import { Checkbox } from "@material-ui/core";
import {uuid} from '../utils/uuid'
const useStyles = makeStyles(theme => {
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

            <div className="checkBox-list">
            {checkBoxState.map((checkBox) => {
                
                    return (
                        <CNCheckBox
                        label={checkBox.label}
                        data={checkBox}
                        checkBoxState={checkBoxState}
                        setCheckBoxState={setCheckBoxState}
                        key = {checkBox.id}
                      
                    />
                    ) 
        
              
                    
                  
                })}
            </div>
           

        
        </>
    )

}

export default Message
