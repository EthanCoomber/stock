import axios from 'axios'

const USERS_REST_API_URL = '/get';

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }
    
    addTicker(ticker, userId) {
        let url = "/" + userId + "/insert?ticker=" + ticker;
        // let body = {
        //     userId: userId,
        //     ticker: ticker
        // }
        
        console.log("put")
        console.log(ticker);
        try {
            
            axios.put(url, null)
            .catch(function (error) {
                // handle error
                console.log(error.response.data);
              });
          } catch (error) {
            console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
          }
        
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();