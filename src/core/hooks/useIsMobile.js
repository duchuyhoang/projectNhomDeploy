import React, { useEffect, useState } from "react";


const isMobile = () => {
    const [isMobile, setIsMobile] = useState(false);


     // Initial if user first go into
    useEffect(() => {
        if (window.matchMedia('(max-width: 600px)')) {
            setIsMobile(true);
        }
    }, [])


    useEffect(() => {
       


        const listener = window.addEventListener("resize", () => {
            if (window.matchMedia('(max-width: 600px)')) {
                setIsMobile(true);
            }
            else setIsMobile(false);

return ()=>{
    window.removeEventListener("resize",()=>{})
}

        }, [isMobile])



    }, [isMobile])

return [isMobile,setIsMobile];

}


