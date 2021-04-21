import React, { useState } from "react";
import { SVGIcon } from "@Components/shared/SvgIcon/Icon";
import { makeStyles } from '@material-ui/core/styles';
import { CNSnackBar } from "./shared/CNSnackBar/CNSnackBar";
import FixedContainer from "@Components/shared/Layout/FixedContainer"
import { CNNotifications } from "@Components/shared/CNNotifications/CNNotifications";


const useStyles = makeStyles(theme => {
    return {
        root: (props) => {
            return {
                ...theme.typography.header
            }
        }
    }
})


export const Message = ({ message }) => {
    const styles = useStyles();
    const [isOpen, setIsOpen] = useState(true);
    throw new Error("Looix")
    return (
        <>
            <FixedContainer config={{
                alignItems: "center",
                justifyContent: "center",
            }
            }>


                {/* Error display by this */}
                <CNNotifications>dadaadadadada</CNNotifications>


            </FixedContainer>
            <CNSnackBar severity={"warning"} isErrorBoundaryAlert={true} isOpen={isOpen} onClose={() => {
                setIsOpen(false)
            }}
                handleClick={() => {
                    setIsOpen(false)
                }}>
                Hello world


    </CNSnackBar>
        </>
    )

}