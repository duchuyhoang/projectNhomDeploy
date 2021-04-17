import React from "react";
import {App} from "./App"
import {Message} from "@Components/Message";
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core'
import theme from "./theme";
export const AppWithContexts=()=>{
// Some context below return
return (
<>
<MaterialThemeProvider theme={theme}>

<App title="Hello world"/>
<Message message="View web pack config for this example import @Component" />

</MaterialThemeProvider>
</>
)

}