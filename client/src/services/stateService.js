import axios from  'axios'

// export API code to get all states
export default {
    getAllStates() {
        return axios.get('/api/states').then( response => {
            return response.data
        })
    }
}