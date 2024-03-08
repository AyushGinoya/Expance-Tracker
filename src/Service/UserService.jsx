import axios from "axios";

const USER_API_BASE_URL="http://localhost:8080/signup";

class UserService{
    saveUser(user){
        return axios.post(USER_API_BASE_URL,user);
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default  new UserService();