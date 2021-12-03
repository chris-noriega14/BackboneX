import axios from 'axios';
export default {
    login: (email, password) => {
         return axios.post('/users/login', {
            "email": email,
            "password": password
          }).then((res) => {
            console.log(res);
          })
    }
}
