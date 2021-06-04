import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { axiosApi } from "@Core/api/axiosApi";

export const homeRoomAdapter = createEntityAdapter({
    selectId: (room) => room.id
});

export const getLatestHomeRoom = createAsyncThunk(
    '/room/getLatestHomeRoom',
    async (payload = 18, { rejectWithValue }) => {

        try {
            const { data } = await axiosApi.get(`/room/getLatest/${payload}`)
            return data;
        } catch (error) {
            return rejectWithValue({ message: "Failed to get latest room" });
        }
    }
)

// const roomSelector = roomAdapter.getSelectors((state) => state.room);

const homeRoom = createSlice({
    name: 'room',
    initialState: homeRoomAdapter.getInitialState({
        loading: "idle",
        error: null
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getLatestHomeRoom.pending, (state, action) => {
            state.loading = "pending";
        })
            .addCase(getLatestHomeRoom.fulfilled, (state, action) => {
                state.loading = "fulfilled";
                homeRoomAdapter.setAll(state, action.payload.data)
            })
            .addCase(getLatestHomeRoom.rejected, (state, action) => {
                state.loading = "error";
                state.error = action.payload.message;
            })

    }
})


export default homeRoom.reducer

