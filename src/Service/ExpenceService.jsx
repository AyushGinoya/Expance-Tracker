import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/expance";

class ExpenceServices {
    saveExpence(expence) {
        return axios.post(`${USER_API_BASE_URL}/add`, expence);
    }

    getExpences(userId) {
        return axios.get(`${USER_API_BASE_URL}/all/${userId}`);
    }
}

export default new ExpenceServices();
