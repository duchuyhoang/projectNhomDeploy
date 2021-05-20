import React from "react";
import { Footer } from "@Components/components/Footer/Footer";
import { Stretcher } from "@Components/components/Stretcher/Stretcher"
import { ServiceComponent } from "@Components/components/ServiceComponent/ServiceComponent"
import { FindHomeComponent } from "@Components/components/FindHomeComponent/FindHomeComponent"

const MainHome = (props) => {
    return (
        <>

            <FindHomeComponent />
            <ServiceComponent />
            <Stretcher />
            <Footer />
        </>
    )
}

export default MainHome