import axios from "axios";
import { getCookie, setCookie } from "../cookies/cookie";
import { parseJwt } from "@Ultis/jwt";
const baseUrl = "http://localhost:3001";
export const axiosApi = axios.create({
    baseURL: baseUrl,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    }
})


axiosApi.interceptors.request.use((request) => {
    console.log("request", request);

    const accessToken = getCookie("cn11_access_token") || null;
    const accessHeader = "Bearer " + accessToken;

    request.headers["Authorization"] = accessHeader;

    return request
})



axiosApi.interceptors.response.use((response) => {
    const isLoginUrl = ["/login", "/re_login"]
    console.log("response", response);
    if (response.config.url === "/login") {
        setNewHeader(response.data)
        // axiosApi.defaults.headers["Authorization"]="Bearer "+response.data.accessToken; 
    }
    return response


},
    async (err) => {
        const originalRequest = err.config;
        const errorResponse = err.response
        originalRequest.retries_times = (err.config.retries_times || 0) + 1;
        // For token if the token is expire
        // && originalRequest.url === "/re_login"
        if (errorResponse.status === 401 && originalRequest.url !== "/refresh_token") {
            if (originalRequest.retries_times <= 2) {
                try {
                    const responseRefresh = await axiosApi.post("/refresh_token", {
                        refresh_token: getCookie("cn11_refresh_token")
                    })
                    setNewHeader(responseRefresh.data)

                    if (originalRequest.url === "/re_login") {
                        return responseRefresh
                    }

                    else {
                        const responseData = await axiosApi(originalRequest);

                        return responseData
                    }

                }
                catch (e) {
                    //   console.clear()
                    console.log("rejected");
                    setCookie("cn11_refresh_token", null, 0);
                    setCookie("cn11_access_token", null, 0);

                    return Promise.reject(err);
                }

            }

        }


        return Promise.reject(err)
    }
)


const setNewHeader = (responseData) => {
    axiosApi.defaults.headers["Authorization"] = "Bearer " + responseData.accessToken
    setCookie("cn11_refresh_token", responseData.refreshToken || getCookie("cn11_refresh_token"), 100);
    setCookie("cn11_access_token", responseData.accessToken, 100);
}

