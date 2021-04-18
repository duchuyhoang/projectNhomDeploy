import React from 'react';
import Alert from '@material-ui/lab/Alert';
export const CNAlertErrorBoundary=(props)=>{


return (

<Alert severity={props.severity} {...props}>
{props.children}
</Alert>

)


}

