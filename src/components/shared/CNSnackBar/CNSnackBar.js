import React from 'react';
import { CNAlert } from "../CNAlert/CNAlert";
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';

function slideTransition(props) {
    return <Slide {...props} direction="up" />;
}

const useSnackBarStyles = makeStyles({
    root: {
        position: "absolute",
        zIndex: 50
    }
})

const useSnackBarContentStyles = makeStyles({
    root: {
        padding: 0,

    },
    message: {
        width: "100%",
        padding: 0
    },
});


export const CNSnackBar = ({ severity = "error", isErrorBoundaryAlert = false, children, isOpen = false, onClose, handleClick, ...rest }) => {
    const snackBarContentStyles = useSnackBarContentStyles();
    const snackBarStyles = useSnackBarStyles();
    const AlertComponent = () => {

        return (

            <CNAlert severity={isErrorBoundaryAlert === true ? "error" : severity} isErrorBoundaryAlert={isErrorBoundaryAlert} onClose={onClose}>
                {children}
            </CNAlert>
        )
    }

    return (
        <>
            <Snackbar open={isOpen}
                {...rest}
                classes={snackBarStyles}
                onClick={() => {
                   
                    if (isErrorBoundaryAlert){
                        handleClick()

                    }
                }

                }
                TransitionComponent={slideTransition}
                ContentProps={{
                    classes: snackBarContentStyles
                }}
                autoHideDuration={isErrorBoundaryAlert ? null : 3000}

                ClickAwayListenerProps={{
                    onClickAway:()=>{
                    }
                }
                }


                onClose={onClose}

                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                key={slideTransition.name}
                message={<AlertComponent />}




            >
            </Snackbar>



            {/* {isErrorBoundaryAlert ? <CNSnackBarErrorBoundary open={isOpen} {...rest}></CNSnackBarErrorBoundary> : 

<CNSnackBarNotification open={isOpen}  {...rest} >

<AlertComponent />

</CNSnackBarNotification>

} */}

        </>
    )


}



 // <Alert severity={severity}>
        //     {isErrorBoundaryAlert ? <CnAlertErrorBoundary {...rest}>{children}
        //     </CnAlertErrorBoundary> :
        //         <CNAlertNotification {...rest}>
        //             {children}
        //         </CNAlertNotification>}


        // </Alert>