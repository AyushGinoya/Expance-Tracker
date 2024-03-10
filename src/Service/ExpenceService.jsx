import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/expance";

class ExpenceServices {
    saveExpence(expence) {
        return axios.post(`${USER_API_BASE_URL}/add`, expence);
    }

    getExpences(userId) {
        return axios.get(`${USER_API_BASE_URL}/all/${userId}`);
    }

    editExpense(expenseId, expence) {
        return axios.put(`${USER_API_BASE_URL}/edit/${expenseId}`, expence);
    }
}

export default new ExpenceServices();
