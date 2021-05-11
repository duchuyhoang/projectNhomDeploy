import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "@Core/api/axiosApi";
import { getCookie } from "../../cookies/cookie";
import { parseJwt } from "@Ultis/jwt";
import { createSelector } from "reselect"

const userLogin = createAsyncThunk("auth/login", async (payload, { rejectWithValue, dispatch }) => {
    try {
        const { email, password } = payload;

        const response = await axiosApi.post("/login", {
            email,
            password
        })

        return response.data;
    }
    catch (error) {
        return rejectWithValue({ message: "Lỗi" });
    }
})


const reLogin = createAsyncThunk("auth/re_login", async (payload, { rejectWithValue }) => {
    try {
        const response = await axiosApi.post("/re_login", {

        });
        return response.data;
    }
    catch (error) {
        return rejectWithValue({ message: "Unauthorized" });
    }
})


// Selector

const selectSelf = (state) => state.auth
const selectAccessToken = createSelector(
    selectSelf,
    (state) => state.accessToken
)


const selectIsLogin = createSelector(
    selectAccessToken,
    (accessToken) => {
        if (accessToken) {
            const parsedToken = parseJwt(accessToken)
            const now = Date.now()
            return { isLogin: parsedToken.exp * 1000 > now ? true : false }
        }
        else
            return { isLogin: false }
    })


const selectCurrentUserId=createSelector(
    selectSelf,
    (state)=>state.id
)


export const authSelectors = {
    selectAccessToken,
    selectIsLogin,
    selectCurrentUserId
}


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: "idle",
        error: null,
        id: null,
        accessToken: null,
        refreshToken: null
    },
    reducer: {},
    extraReducers: (builder) => {
        // Login
        builder.addCase(userLogin.pending, (state, action) => {
            state.loading = "loading"
        })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.id = parseJwt(action.payload.accessToken)?.id || null;
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken
                state.loading = "fulfilled";
                state.error = null;
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.accessToken = null;
                state.refreshToken = null
                state.error = action.message;
                state.loading = "rejected";
            })

        // Relogin
        builder.addCase(reLogin.pending, (state, action) => {
            state.login = "pending"
        })
            .addCase(reLogin.fulfilled, (state, action) => {
                state.id = parseJwt(action.payload.accessToken)?.id || null;
                state.loading = "fulfilled";
                state.accessToken = action.payload.accessToken;
                state.refreshToken = getCookie("cn11_refresh_token") || null;
            })
            .addCase(reLogin.rejected, (state, action) => {
                state.loading = "rejected"
                state.accessToken = null;
                state.refreshToken = null
            })



    }

})


export const authActions = {
    userLogin,
    reLogin
}


export default authSlice.reducer;
// export const {userLogin}=authSlice.actions;
