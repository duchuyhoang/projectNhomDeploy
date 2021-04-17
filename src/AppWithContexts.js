import React from "react";
import {App} from "./App"
import {Message} from "@Components/Message";
export const AppWithContexts=()=>{
// Some context below return
return (
<>
<App title="Hello world"/>
<Message message="View web pack config for this example import @Component" />
</>
)

}