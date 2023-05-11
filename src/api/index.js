import axios from 'axios'

const api = axios.create({
    baseURL: 'https://mern-auth-backend-production.up.railway.app/api',
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
