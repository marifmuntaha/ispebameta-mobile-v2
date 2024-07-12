import {APICore} from './APICore'

const api = new APICore()

// account
function login(params: { username: string; password: string }) {
    const baseUrl = '/auth/login'
    return api.create(`${baseUrl}`, params)
}

function signup(params: { name: string, email: string, password: string, password_confirmation: string, nip: string, institution: string, position: string }) {
    const baseUrl = '/auth/register'
    return api.create(`${baseUrl}`, params)
}

function logout() {
    const baseUrl = '/auth/logout/'
    return api.create(`${baseUrl}`, {})
}

function forgotPassword(params: { username: string }) {
    const baseUrl = '/forgot-password/'
    return api.create(`${baseUrl}`, params)
}

export {login, signup, logout, forgotPassword}