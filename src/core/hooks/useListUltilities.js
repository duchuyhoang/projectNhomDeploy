import React, { useState, useEffect } from "react";
import { axiosApi } from "@Core/api/axiosApi";

export const useListUltilities=()=>{
const [listUltility,setListUltility]=useState([]);


useEffect(()=>{
    axiosApi.get("/ultility/getAll").then(values=>{
if(values.data.data!==null){
    setListUltility(values.data.data.map(value=>{
        return {
            value:value.id,
            label:value.name,
        }
    }))
}
else
setListUltility([]);
})
},[])


return {
    listUltility
}

}