import axios from "axios";
// import { getUserFromLocalStorage } from "./localStorage";

const customFetch = axios.create({
    baseURL:"https://redux-toolkit-jobster-api-server.onrender.com/api/v1",
})


// ! you can use this functionality instead of the authHeader function 741

// customFetch.interceptors.request.use(
//     (config) =>{
//         const user = getUserFromLocalStorage()
//         if(user){
//             config.headers.common['Authorization' ] = `Bearer ${user.token}`
//         }
//         return config;
//     },
//     (error) =>{
//         return Promise.reject(error)
//     }
//     )



export default customFetch;