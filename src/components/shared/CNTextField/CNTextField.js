import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useTextFiledContentStyles = makeStyles((theme) => ({

    root: (props) => ({
        border: `2px solid #d8d8d8`,
        width: 300,
        borderRadius: props.type === "largeBorderRadius" ? 20 : 5
    }),
    input: (props) => ({
        color: theme.palette.text.primary,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 18,
        fontWeight: "bold"
    })

}))

export const CNTextField = ({type, inputChange,...rest }) => {

    const textFieledStyles = useTextFiledContentStyles({type});
    return (
        <>
            <Input
             
                disableUnderline={true}
                classes={textFieledStyles}
                onChange={inputChange}
                inputProps={{
                    'aria-label': 'Description',
                }}
                {...rest}
            />
        </>
    )
}
