import React from "react";
import {App} from "./App"
import {Message} from "@Components/Message";
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core'
import { ThemeProvider as StyledComponnentProvider } from 'styled-components'
import {Provider as ReduxProvider} from "react-redux";
import theme from "./theme";
import {store} from "@Core/redux/store";
import {ErrorBoundary} from "@Components/ErrorBoundary/ErrorBoundary";
export const AppWithContexts=()=>{
// Some context below return
return (
<>
<MaterialThemeProvider theme={theme}>
    <StyledComponnentProvider theme={theme}>
        <ReduxProvider store={store}>
<ErrorBoundary>
<App title="Hello world"/>
{/* <Message message="View web pack config for this example import @Component" /> */}
</ErrorBoundary>
</ReduxProvider>
</StyledComponnentProvider>
</MaterialThemeProvider>

</>
)

}