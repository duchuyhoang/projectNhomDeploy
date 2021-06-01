import React, { useState, useEffect } from "react";
import { axiosApi } from "@Core/api/axiosApi";

export const useLocationSearch = () => {
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedWard, setSelectedWard] = useState(null);
    const [listProvince, setListProvince] = useState([]);
    const [listDistrict, setListDistrict] = useState([]);
    const [listWard, setListWard] = useState([]);

    useEffect(() => {
        // First call to get list city
        axiosApi.get("/province/getAll").then(values => {
            if (values.data.data !== null)
                setListProvince(values.data.data.map((value) => {
                    return {
                        value: value.id,
                        label: value?.province_name
                    }
                }))
            else
                setListProvince([]);
        }).catch(err => {
            // Err handle here need to do
        })
    }, [])

    // Handle selected province change
    useEffect(() => {
        setSelectedDistrict(null);
        setSelectedWard(null);

        // Get new district by city id,city !== null to prevent first
        if (selectedProvince !== null) {
            axiosApi.get(`/district/getById/${selectedProvince.value}`).then(values => {
                if (values.data.data !== null)
                    setListDistrict(values.data.data.map((value) => {
                        return {
                            value: value.id,
                            label: value.prefix + " " + value.name
                        }

                    }))
                else
                    setListDistrict([]);
            }).catch((err) => {
                // haandle error district here
            })
        }
        else {
            // If city null then district and ward null

            setListDistrict([]);
            setListWard([]);
        }
    }, [selectedProvince])


    // Get ward
    useEffect(() => {
        setSelectedWard(null);

        if (selectedDistrict !== null) {
            axiosApi.get(`/ward/getByCityAndDistrict/${selectedProvince.value}/${selectedDistrict.value}`).then((values) => {
                if (values.data.data !== null)
                    setListWard(values.data.data.map((value) => {
                        return {
                            value: value.id,
                            label: value.prefix + " " + value.name,
                        }
                    }))

                    else
                    setListWard([]);
            })}

        else {
            setListWard([]);
        }
    }, [selectedDistrict])


    return {
        listProvince,
        listDistrict,
        listWard,
        selectedProvince,
        selectedDistrict,
        selectedWard,
        setSelectedProvince,
        setSelectedDistrict,
        setSelectedWard
    }


}