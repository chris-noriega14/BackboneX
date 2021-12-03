import axios from 'axios';
export default {
    register: (first_name, last_name, email, password1, password2) => {
         return axios.post('/users/register', {
          "first_name": first_name,
          "last_name": last_name,
          "email": email,
          "password": password1,
          "password2": password2
          })
    }
}


