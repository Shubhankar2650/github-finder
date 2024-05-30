import axios from "axios";


const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
});

export const getUserDataByUsername = (username) => api.get(`/users/${username}`)

export const getUserRepos = (username) => api.get(`/users/${username}/repos`)

export const getUserFollowers = (username) => api.get(`/users/${username}/followers`)

export const getUserFollowing = (username) => api.get(`/users/${username}/following`)


export default api;