import React, { useState } from "react";
import { SVGIcon } from "@Components/shared/SvgIcon/Icon";
import { makeStyles } from '@material-ui/core/styles';
import { CNSnackBar } from "./shared/CNSnackBar/CNSnackBar";
import FixedContainer from "@Components/shared/Layout/FixedContainer"
import { CNNotifications } from "@Components/shared/CNNotifications/CNNotifications";
import { CNSelect } from "@Components/shared/CNSelect/CNSelect";
import { CNCard } from "@Components/shared/CNCard/CNCard";


const useStyles = makeStyles(theme => {
    return {
        root: (props) => {
            return {
                ...theme.typography.header
            }
        }
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
            <div style={{ height: "200px", width: "300px" }}>


                <CNCard headerComponent={<img src="https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg" width="100%" maxHeight="400" />}
                    bodyComponent={
                        <>
                            <p>
                                Lizard
          </p>
                            <p>
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
          </p>
                        </>
                    }

                    footerComponent={<div style={{ display: "flex", justifyContent: "center" }}>
                        <button>Hello</button>
                        <button>Hello11111</button>

                    </div>}


                />

            </div>
        </>
    )

}

export default Message
