import React, { useEffect, useState } from "react";


const useMediaQuery = (query) => {
    const [mediaScreenTrue, setMediaScreenTrue] = useState(()=>window.matchMedia(query).matches);


    // Initial if user first go into

    useEffect(() => {

        const handleResize = () => {
            if (window.matchMedia(query).matches) {
              if (!mediaScreenTrue) setMediaScreenTrue(true);
            } else {
              if (mediaScreenTrue) setMediaScreenTrue(false);
            }
          };
      
          window.addEventListener("resize", handleResize);
      
          return () => {
            window.removeEventListener("resize", handleResize);
          };

    }, [mediaScreenTrue])

    return { mediaScreenTrue, setMediaScreenTrue }

}

export default useMediaQuery


