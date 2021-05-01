import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CNSnackBar } from "./shared/CNSnackBar/CNSnackBar";
import FixedContainer from "@Components/shared/Layout/FixedContainer"
import { CNNotifications } from "@Components/shared/CNNotifications/CNNotifications";
import { CNSelect } from "@Components/shared/CNSelect/CNSelect";
import { CNTextField } from "@Components/shared/CNTextField/CNTextField";


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
    }
}
)


const Message = ({ message }) => {
    const styles = useStyles();
    //const [selectValue,setSelecteValue]=useState(null);
    const [inputValue, setInputValue] = useState(null);
    console.log(inputValue);
    const inputChange = (e) => {
        setInputValue(e.target.value)

    };


    return (
        <>

            <CNTextField
                inputChange={inputChange}
                type="largeBorderRadius"p
                placeholder="ABCn"
            />
               <CNTextField
                inputChange={inputChange}
            
                placeholder="ABCn"
            />
            <br></br>
               <CNTextField
                fullWidth={true}
                inputChange={inputChange}
                placeholder="ABCn"
            />


        </>
    )

}

export default Message
