import React, { lazy, Suspense } from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
const Message = lazy(() => import("@Components/Message"));
import { NavBar } from "@Components/components/NavBar/NavBar";
import styled from 'styled-components'

const Content = styled.section`
padding-top:80px;
`

export const App = ({ title }) => {
    return (
        <>
            
            
                <Router>
                <NavBar currentTab={"properties"}></NavBar>
                <Content>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/home">
                                <Message />
                            </Route>
                            <Route path="/users">
                            </Route>
                            <Route path="/">
                                <Redirect to={{
                                    pathname: "/home"
                                }} />
                            </Route>
                        </Switch>
                        
                    </Suspense>
                    </Content>
                </Router>
            
        </>
    )
}