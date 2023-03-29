import axios from 'axios'

export const apiUrl =  'https://api.punkapi.com/v2/'

export const axiosRequest = axios.create({baseURL: apiUrl})

// export const requests = {
//     getAllGoods: async (page, per_page) => {
//         try {

//         }
//     }
// }