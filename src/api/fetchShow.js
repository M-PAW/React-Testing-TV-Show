
import axios from 'axios';

// fetchShow.js
export const fetchShow = () => {

    return axios.get 
           .then(res => {return res.data})

}