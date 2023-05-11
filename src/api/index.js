import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const signup = payload => api.post(`/signup`, payload, {
    headers: {
        'Content-Type': 'application/json'
    }
})
export const signin = payload => api.post(`/signin`, payload, {
    headers: {
        'Content-Type': 'application/json'
    }
})

const apis = {
    signin,
    signup
}

export default apis
