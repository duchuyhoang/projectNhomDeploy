import React from "react";
import {SVGIcon} from "@Components/shared/SvgIcon/Icon";
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>{
    console.log(theme)
    return {
        root:(props)=>{
            return {
               ...theme.typography.header
            }
        }
    }
})

export const Message=({message})=>{
const styles=useStyles();

return (
    <>
    <div className={styles.root}>We provide full service at every step</div>
    <SVGIcon name="instagram" height={30} width={30} />
    </>
)

}