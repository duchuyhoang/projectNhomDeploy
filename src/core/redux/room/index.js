import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "@Core/api/axiosApi";
import { createSelector } from "reselect";


export const getLatestRoom = createAsyncThunk(
    '/room/getLatest/10',
    async(playload, {rejectWithValue}) => {
        try {
            const {data} = await axiosApi.get(`/room/getLatest/10`)
            return data;
        } catch (error) {
            return rejectWithValue({ message: "Failed to get latest room" });
        }
    }
)


const roomSlice = createSlice({
    name: 'room',
    initialState:{
        roomList: null,
        loading: "idle",
        error: null
    },
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(getLatestRoom.pending,(state, action) => {
            state.loading = "pending";
        })
            .addCase(getLatestRoom.fulfilled, (state, action) => {
                state.loading = "done";
            state.roomList = [...action.payload.data];
            })
            .addCase(getLatestRoom.rejected, (state, action) => {
                state.loading = "error";
            state.error = action.payload.message;
            })
     
    }
})

export default roomSlice.reducer
