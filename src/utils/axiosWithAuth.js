import axios from "axios";

export const axiosWithAuth = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    return axios.create({
        
        headers: {
            authorization: token
        },
        baseURL: "https://water-my-plants-tt67.herokuapp.com/api"
    })
}
