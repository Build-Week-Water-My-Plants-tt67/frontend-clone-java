import axios from "axios";

export const axiosWithAuth = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    
    return axios.create({
        
        headers: {
            Authorization: `Bearer ${token}`,
        },
        baseURL: "https://bw-tt-67-water-my-plants.herokuapp.com/api"
    });
}
