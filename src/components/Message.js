import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Stretcher } from "@Components/components/Stretcher/Stretcher";
import { Footer } from "@Components/components/Footer/Footer";
import { HomeModal } from "@Components/components/Modals/HomeModal";


const useStyles = makeStyles((theme) => {
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
    const [isHomeModalShow, setIsHomeModalShow] = useState(false);

    return (
        <>

            <Stretcher>

            </Stretcher>
            <Footer>

            </Footer>
            {isHomeModalShow && <HomeModal showModal={isHomeModalShow} setShowModal={setIsHomeModalShow} />}

            <button onClick={() => {
                setIsHomeModalShow((prev) =>{return !prev})
            }}>
                Nhấn
    </button>
        </>
    )

}

export default Message

