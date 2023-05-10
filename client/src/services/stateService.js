import axios from  'axios'

// export API code to get all states
export default {
    getAllStates() {
        return axios.get('/api/states').then( response => {
            return response.data
        })
    },

    setVisited(stateName, visited) {
        // example URL api/state/Wisconsin
        let requestData = { visited: visited }
        return axios.patch('/api/states/' + stateName, requestData).then( response => {
            return response.data
        })
    }
}