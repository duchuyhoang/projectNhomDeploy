import React, { useState, useEffect } from 'react';
import RoomCard from '@Components/components/RoomCard/RoomCard';
import { useDispatch, useSelector } from 'react-redux';
import { roomActions, roomSelectors } from "@Core/redux/room";
import Slider from 'react-slick';
import "./HomeListRoom.css"



export const HomeListRoom = () => {
    const listRoom = useSelector(roomSelectors.homeRoomSelectAll) || [];
    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: listRoom && listRoom.length > 3 ? 3 : listRoom.length,
        slidesToScroll: 1,
        arrows: false
    };


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(roomActions.getLatestHomeRoom());
    }, [])



    console.log(listRoom);

    // if(listRoom?.l)


    return (
        <>
            {listRoom && listRoom?.length > 0 ?
                <Slider {...settings}>
                    {listRoom.map((room) => {
                        return (<RoomCard
                            name={room.name}
                            city={room.cityName}
                            district={room.districtName}
                            ward={room.wardName}
                            list_images={room?.images || []}
                            price={room.water_bill + room.price + room.utility_bill}
                            capacity={room.capacity}
                            acreage={room.acreage}
                            user_name={room.user_name}
                            user_avatar={room.user_avatar}
                            list_utilities={room.utilities}
                            createTime={room.createTime}
                        />)
                    })}

                </Slider>

                :

                <div>Chưa có phòng nào</div>
            }

        </>
    )
}
