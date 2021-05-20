import React,{Suspense} from "react";
import { CNLoading } from "@Components/shared/CNLoading/CNLoading";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useRouteMatch
} from "react-router-dom";
import loadable from "@loadable/component";

const HomeListPage = loadable(() => import("./list/index"),{ fallback: <CNLoading />});



const Property = (props) => {
    const { path } = useRouteMatch();

    return (
        <>
        <Suspense fallback={<CNLoading />}>
            <Switch>
        <Route path={`${path}`} component={HomeListPage} />
                {/* <Route path="/" /> */}
            </Switch>
        </Suspense>
        </>
    )
}
export default Property