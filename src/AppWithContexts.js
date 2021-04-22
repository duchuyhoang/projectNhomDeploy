import React from "react";
import {App} from "./App"
import {Message} from "@Components/Message";
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core'
import theme from "./theme";
import {ErrorBoundary} from "@Components/ErrorBoundary/ErrorBoundary";
export const AppWithContexts=()=>{
// Some context below return
return (
<>
<MaterialThemeProvider theme={theme}>
<ErrorBoundary>
<App title="Hello world"/>
{/* <Message message="View web pack config for this example import @Component" /> */}
</ErrorBoundary>
</MaterialThemeProvider>

</>
)

}