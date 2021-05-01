import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CNAvatar } from "@Components/shared/CNAvatar/CNAvatar";


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
    }      
})


const Message = ({ message }) => {
    const styles = useStyles();
    const [isOpen, setIsOpen] = useState(true);
    const [selectValue, setSelecteValue] = useState(null);

    const handleChange = e => {
        if (e === null)
            setSelecteValue(null)
        else
            setSelecteValue(e?.value)
    }


    return (
        <>
            <div className={styles.style}>
            <CNAvatar type='small' src="https://scontent.fhan2-3.fna.fbcdn.net/v/t31.18172-8/27788301_747405972119527_849243654152381069_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Y70lW6lJjnUAX-HXg8x&_nc_ht=scontent.fhan2-3.fna&oh=e61467209325108f35652c15f83ba177&oe=60AF6AD1"></CNAvatar>
            <CNAvatar type='large' src="https://scontent.fhan2-3.fna.fbcdn.net/v/t31.18172-8/27788301_747405972119527_849243654152381069_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Y70lW6lJjnUAX-HXg8x&_nc_ht=scontent.fhan2-3.fna&oh=e61467209325108f35652c15f83ba177&oe=60AF6AD1"></CNAvatar>
            </div>
        </>
    )

}

export default Message
