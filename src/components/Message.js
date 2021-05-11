import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CNSnackBar } from "./shared/CNSnackBar/CNSnackBar";
import FixedContainer from "@Components/shared/Layout/FixedContainer"
import { CNNotifications } from "@Components/shared/CNNotifications/CNNotifications";
import { CNSelect } from "@Components/shared/CNSelect/CNSelect";
import {CNCheckBox} from '@Components/shared/CNCheckBox/CNCheckBox';

import {CNPagination} from '@Components/shared/CNPagination/CNPagination'
import {uuid} from '../utils/uuid'
const useStyles = makeStyles(theme => {
    return {
        style: {
            display: "flex",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed"
        }
    }
}
)


const Message = ({ message }) => {
    const styles = useStyles();
    const [paginationState,setPaginationState]=useState({
        
        total: 20,
        currentValue: 5
    
    })
    return (
        <>

            <CNPagination
                count = {paginationState.total}
                page = {paginationState.currentValue}
                siblingCount={paginationState.total/12}
                paginationState={paginationState}
                setPaginationState={setPaginationState}
            />
           


        </>
    )

}

export default Message

