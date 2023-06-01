import axios from 'axios'

const USERS_REST_API_URL_POST = '/get';
const USERS_REST_API_URL_PUT = '/get';

class UserService {

    addUser(user) {
      console.log(user)
      try {
        axios.put(USERS_REST_API_URL_PUT, user)
      } catch (error) {
        console.error(error.response.data); 
      }
    }

    getUsers(){
        return axios.get(USERS_REST_API_URL_POST);
    }
    
    addTicker(ticker, userId) {
      console.log(ticker)
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