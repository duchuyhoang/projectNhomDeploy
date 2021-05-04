import React, { useState } from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { SVGIcon } from "@Components/shared/SvgIcon/Icon"
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
const useFormControlLabelStyles = makeStyles(
    (theme) => {
        return {
            root: {
                "&:hover": {
                    "& span": {
                        background: "transparent"
                    }
                }
            },

        }
    });

const useCheckBoxStyles = makeStyles(
    (theme) => {
        return {
            root: {
                color: theme.palette.text.primary,
                "&:hover": {
                    background: "transparent !important",
                }

            }

        }
    }
);
const useTypographyStyles = makeStyles((theme) => {
    return {
        root: {

        },
        active: {

            color: theme.palette.primary.main,
            fontWeight: 400,
            fontSize: 14
        },
        unActive: {
            color: theme.palette.text.primary,
            fontSize: 14
        }
    }
})
export const CNCheckBox = ({ label, checkBoxState, setCheckBoxState, data, type, ...rest }) => {
    const checkboxStyles = useCheckBoxStyles();
    const FormControlLabelStyles = useFormControlLabelStyles();
    const typographyStyles = useTypographyStyles();
    const checkHandler = (e) => {

        setCheckBoxState(checkBoxState.map((item) => {

            if (item.id === data.id) {
                return {
                    ...item,
                    isChecked: !item.isChecked,

                }

            }
            return item
        }))

    };

    return (
        <>
            <FormControlLabel
                classes={FormControlLabelStyles}
                control={
                    <Checkbox
                        value={data.value}
                        classes={checkboxStyles}
                        checked={data.isChecked}
                        checkedIcon={<CheckBoxOutlinedIcon />}
                        
                    />

                }

                onChange={checkHandler}
                label={<span className={`${data.isChecked ? typographyStyles.active : typographyStyles.unActive}`} >{data.label}</span>}
                {...rest}

            />




        </>






    )


}

