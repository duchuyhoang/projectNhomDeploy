import React, { useState } from "react";
import { SVGIcon } from "@Components/shared/SvgIcon/Icon";
import { makeStyles } from '@material-ui/core/styles';
import { CNSnackBar } from "./shared/CNSnackBar/CNSnackBar";
import FixedContainer from "@Components/shared/Layout/FixedContainer"
import { CNNotifications } from "@Components/shared/CNNotifications/CNNotifications";
import { CNSelect } from "@Components/shared/CNSelect/CNSelect";
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
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <CNSelect options={
                    [
                        { value: 'chocolate', label: 'Chocolate' },
                        { value: 'strawberry', label: 'Strawberry' },
                        { value: 'vanilla', label: 'Vanilla' }
                    ]
                    } 
                onChange={handleChange}
                placeholder={"Select..."}
                />
                {selectValue===null ? "Chưa chọn" : selectValue}
            </div>

        </>
    )

}

export default Message
