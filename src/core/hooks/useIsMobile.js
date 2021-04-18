import React, { useEffect, useState } from "react";


const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);


    // Initial if user first go into
    useEffect(() => {
        if (window.matchMedia('(max-width: 600px)').matches) {
            setIsMobile(true);
        }
    }, [])


    useEffect(() => {

        const handleResize = () => {
            if (window.matchMedia("(max-width: 600px)").matches) {
              if (!isMobile) setIsMobile(true);
            } else {
              if (isMobile) setIsMobile(false);
            }
          };
      
          window.addEventListener("resize", handleResize);
      
          return () => {
            window.removeEventListener("resize", handleResize);
          };

    }, [isMobile])

    return { isMobile, setIsMobile }

}

export default useIsMobile


