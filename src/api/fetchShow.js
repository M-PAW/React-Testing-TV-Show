import axios from 'axios';

// fetchShow.js
export const getShow = () => {

    return axios.get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      ) 
           .then(res => {return res})
           .catch(err => {return err})

}