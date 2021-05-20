import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "@Core/api/axiosApi";
import { createSelector } from "reselect";



const getCurrentUser = createAsyncThunk("user/current", async (payload, { rejectWithValue }) => {
    const { id } = payload
    if (id !== null) {
        try {
            const response = await axiosApi.get(`/current_user/${id}`);
            console.log("response",response.data);
            return response.data
        }
        catch (err) {
            return rejectWithValue({ message: "Unauthorized" });
        }

    }

})


const selectSelf = (state) => state.currentUser;

const selectUserInfo = createSelector(selectSelf,
    selectSelf,
(state)=>state.user
)

export const currentUserSelectors={
    selectUserInfo
}


export const currentUserActions = {
    getCurrentUser
}



const userSlice = createSlice({
    name: "user",
    initialState: {
        // id: null,
        // avatar: null,
        // firstName: null,
        // middleName: null,
        // lastName: null,
        user:null,
        loading: "idle",
        error: null,
    },
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(getCurrentUser.pending, (state, action) => {
            state.loading = "pending"
        })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.loading = "fulfilled";
                state.user=action.payload||null
                // state.id = id;
                // state.avatar = avatar;
                // state.firstName = firstName;
                // state.middleName = middleName;
                // state.lastName = lastName;
            })
            .addCase(getCurrentUser.rejected, (state, action) => {
                state.error = true
                state.user=null;
            })



    }


}
)

export default userSlice.reducer;

