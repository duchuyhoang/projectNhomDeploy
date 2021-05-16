import React,{Suspense} from "react";
import {CNLoading} from "@Components/shared/CNLoading/CNLoading";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation,
    useRouteMatch
} from "react-router-dom";
import loadable from "@loadable/component";

const MainHome=loadable(()=> import("./MainHome"),{
    fallback: <CNLoading />
  })

const HomeTest=loadable(()=> import("./HomeTest"),{
    fallback: <CNLoading />
  })


// import MainHome from "./MainHome"

const Home=(props)=>{
    const {path}=useRouteMatch();
const previousPath=location.pathname;
console.log(previousPath+"/hello");

return (
    <>
    {/* <Router> */}
<Suspense fallback={<CNLoading />}>
<Switch>
<Route path={path} exact component={MainHome} />
<Route path={`${path}/property`} exact component={HomeTest} />

</Switch>
</Suspense>
{/* </Router> */}

</>
)

}

export default Home