import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { axiosApi } from "@Core/api/axiosApi";
import { createSelector } from "reselect";


const roomAdapter = createEntityAdapter();

export const getLatestRoom = createAsyncThunk(
    '/room/getLatestRoom',
    async(payload = 18, {rejectWithValue}) => {
        
        try {
            const {data} = await axiosApi.get(`/room/getLatest/${payload}`)
            return data;
        } catch (error) {
            return rejectWithValue({ message: "Failed to get latest room" });
        }
    }
)

const roomSelector = roomAdapter.getSelectors((state) => state.room);

const roomSlice = createSlice({
    name: 'room',
    initialState: roomAdapter.getInitialState({
        
            loading: "idle",
            error: null
    }),
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(getLatestRoom.pending,(state, action) => {
            state.loading = "pending";
        })
            .addCase(getLatestRoom.fulfilled, (state, action) => {
                state.loading = "done";
                roomAdapter.setAll(state,action.payload.data)
            })
            .addCase(getLatestRoom.rejected, (state, action) => {
                state.loading = "error";
            state.error = action.payload.message;
            })
     
    }
})
export const roomSelectors = {
    roomSelector
}
export const roomActions = {
    getLatestRoom
}
export default roomSlice.reducer

