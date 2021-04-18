import React from 'react';
import { CNAlertErrorBoundary } from "./CNAlertErrorBoundary";
import { CNAlertNotification } from "./CNAlertNotification";
export const CNAlert = ({ severity = "error", isErrorBoundaryAlert = false, children,onClose, ...rest }) => {
    return (
<>
       
            {isErrorBoundaryAlert ? <CNAlertErrorBoundary {...rest} severity={severity}>{children}
            </CNAlertErrorBoundary> :
                <CNAlertNotification {...rest} severity={severity} onClose={onClose} isErrorBoundaryAlert={isErrorBoundaryAlert}>
                    {children}
                </CNAlertNotification>}


    
</>
    )


}

