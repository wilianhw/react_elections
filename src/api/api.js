import axiosInstance from "axios";

const axios = axiosInstance.create({ baseURL: "http://localhost:3001" });

export async function apiGetAllCities() {
    const { data } = await axios.get("/cities");
    const sortedCities = data.sort((a, b) => a.name.localeCompare(b.name));

    return sortedCities;
}

export async function apiGetAllCandidates() {
    const { data } = await axios.get("/candidates");
    return data;
}
