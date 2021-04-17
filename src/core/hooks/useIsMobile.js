import React, { useEffect, useState } from "react";


<<<<<<< HEAD
const isMobile = () => {
    const [isMobile, setIsMobile] = useState(false);


     // Initial if user first go into
    useEffect(() => {
        if (window.matchMedia('(max-width: 600px)')) {
=======
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);


    // Initial if user first go into
    useEffect(() => {
        if (window.matchMedia('(max-width: 600px)').matches) {
>>>>>>> ec3f270 (add is mobile hook)
            setIsMobile(true);
        }
    }, [])


    useEffect(() => {
<<<<<<< HEAD
       


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

=======

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

    return { isMobile, setIsMobile };

}

export default useIsMobile
>>>>>>> ec3f270 (add is mobile hook)

