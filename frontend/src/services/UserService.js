import axios from 'axios'

const USERS_REST_API_URL = '/get';

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();