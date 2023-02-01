import Axios from 'axios'

const axiosInstance = Axios.create({
    baseURL : "http://localhost:5600"
});

const UserApi = {
   
    create : (user) => {
        return axiosInstance.request({
            method: "POST",
            url : `/users`,
            data : user
        })
    },
}

export default UserApi;