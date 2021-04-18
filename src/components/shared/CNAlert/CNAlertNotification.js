import React from 'react';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useAlertStyles = makeStyles({
    icon: {
        display: 'flex',
        alignItems: "center",
    },
    message: {
        display: 'flex',
        alignItems: "center",
    },
});


export const CNAlertNotification = ({ children, onClose, isErrorBoundaryAlert, severity, ...rest }) => {
    const alertStyles = useAlertStyles();

    return (
        <Alert severity={severity} {...rest}
            classes={alertStyles}
            action={
                isErrorBoundaryAlert ? null :
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        onClick={onClose}
                    >
                        <CloseIcon />
                    </IconButton>
            }

        >
            {children}
        </Alert>

    )

}