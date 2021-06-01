import React, { useCallback, useEffect, useState } from 'react';
import { uuid } from '@Ultis/uuid';

export const useListImages = () => {
    // const temporatoryListImage = useRef([]);
const [listImages,setListImages]=useState([]);
    const [addListImages, setAddListImages] = useState([]);

    useEffect(() => {
     if (addListImages.length > 0) {
            var previousList= [...listImages];
            for (let index in addListImages) {
                if (!isNaN(index)){
                    previousList.push(
                        {
                            id: uuid(),
                            toUpload: addListImages[index],
                            previewSrc:URL.createObjectURL(addListImages[index])
                        }
                        );
                        
                }
            }
            // Set new image List
            setListImages(previousList)
        }
    }, [addListImages])

const deleteAnImage=useCallback((id)=>{
    var previousList= [...listImages];
    setListImages(previousList.filter((image)=>image.id!=id));
},[listImages])



    return {
        listImages,
        setAddListImages,
        deleteAnImage
    }

}