import React, { lazy, Suspense } from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
const Message=lazy(()=>import("@Components/Message"));


export const App = ({ title }) => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/home">
                        <Message />
                    </Route>
                    <Route path="/users">
                    </Route>
                    <Route path="/">
                        <Redirect to={{
                            pathname:"/home"
                        }} />
                    </Route>
                </Switch>

            </Suspense>


        </Router>
    )
}