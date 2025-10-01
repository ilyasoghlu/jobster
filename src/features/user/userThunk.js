

import customFetch, {checkForUnauthorizedResponse} from "../../utils/axios";
import authHeader from "../../utils/authHeader";
import { clearAllJobsState } from "../allJobs/allJobsSlice";
import { clearValues } from "../job/jobSlice";
import { logoutUser } from "./userSlice";


export const registerUserThunk = async(url, user, thunkAPI) => {
    try {
        const resp = await customFetch.post(url, user)
        return resp.data
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkAPI)
    }
} 


export const loginUserThunk = async(url, user, thunkAPI) =>{
    try {
        const resp = await customFetch.post(url, user);
        return resp.data;
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkAPI)
    }
}


export const updateUserThunk = async(url, user, thunkAPI) =>{
    try {
        const resp = await customFetch.patch(url, user, authHeader(thunkAPI)
        );
        return resp.data;
        } catch (error) {
            return checkForUnauthorizedResponse(error, thunkAPI);
        }
        }


export const clearStoreThunk = async(message, thunkAPI) =>{
    try {
        // ! logout user 
        thunkAPI.dispatch(logoutUser(message))
        // ! clear value
        thunkAPI.dispatch(clearAllJobsState())
        // ! clear job input values
        thunkAPI.dispatch(clearValues())
        return Promise.resolve()

    } catch (error) {
        return Promise.reject()
        
    }
}