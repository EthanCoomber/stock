import axios from 'axios'

const USERS_REST_API_URL = '/get';

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }
    
    addTicker(ticker, userId) {
        let url = "/" + userId + "/insert?ticker=" + ticker;
        try {
            axios.put(url, null)
          } catch (error) {
            console.error(error.response.data); 
          }
        
    }

    deleteTicker(ticker, userId) {
        let url = "/" + userId + "/delete?ticker=" + ticker;
        try {
            axios.delete(url, null)
          } catch (error) {
            console.error(error.response.data); 
          }
        
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();