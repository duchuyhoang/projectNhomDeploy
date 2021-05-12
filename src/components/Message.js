import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CNSnackBar } from "./shared/CNSnackBar/CNSnackBar";
import FixedContainer from "@Components/shared/Layout/FixedContainer"
import { CNNotifications } from "@Components/shared/CNNotifications/CNNotifications";
import { CNSelect } from "@Components/shared/CNSelect/CNSelect";
import { CNCheckBox } from '@Components/shared/CNCheckBox/CNCheckBox';

import { CNPagination } from '@Components/shared/CNPagination/CNPagination'
import { uuid } from '../utils/uuid'
import { ServiceComponent } from './components/ServiceComponent/ServiceComponent'
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

    const [cardList, setCardList] = useState([{
        SVGIcon: "highFive",
        title: "Trusted By Thousands",
        description: "Aliquam dictum elit vitae mauris facilisis at dictum vitae mauris  urna dignissim donec vel lectus vel felis."
    },
    {
        SVGIcon: "home",
        title: "Wide Renge Of Properties",
        description: "Aliquam dictum elit vitae mauris facilisis at dictum vitae mauris  urna dignissim donec vel lectus vel felis."
    },
    {
        SVGIcon: "profitcalculator",
        title: "Financing Made Easy",
        description: "Aliquam dictum elit vitae mauris facilisis at dictum vitae mauris  urna dignissim donec vel lectus vel felis."
    }, {
        SVGIcon: "home",
        title: "Wide Renge Of Properties",
        description: "Aliquam dictum elit vitae mauris facilisis at dictum vitae mauris  urna dignissim donec vel lectus vel felis."
    },
    {
        SVGIcon: "profitcalculator",
        title: "Financing Made Easy",
        description: "Aliquam dictum elit vitae mauris facilisis at dictum vitae mauris  urna dignissim donec vel lectus vel felis."
    }])
    return (
        <>
        
            <ServiceComponent cardList={cardList} setCardList={setCardList} />

        </>
    )

}

export default Message

