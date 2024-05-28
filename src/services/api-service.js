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

export const getUserLanguage = (username, repo) => api.get(`/repos/${username}/${repo}/languages`)

export default api;