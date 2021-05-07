import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Stretcher } from "@Components/components/Stretcher/Stretcher";
import { Footer }from "@Components/components/Footer/Footer";
import { LogInModal }from "@Components/components/LogInModal/LogInModal";

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

    return (
        <>           
            
            <Stretcher>

            </Stretcher>
            <Footer>

            </Footer>
            <LogInModal>
                Login
            </LogInModal>
        </>
    )

}

export default Message

