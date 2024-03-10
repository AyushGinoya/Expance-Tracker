import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/signup";
const USER_LOGIN_API_BASE_URL = "http://localhost:8080/login";

class UserService {
    saveUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }

    loginUser(user) {
        return axios.post(USER_LOGIN_API_BASE_URL, user)
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();