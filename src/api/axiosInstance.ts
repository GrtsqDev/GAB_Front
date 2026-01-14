import axios from 'axios'
const BASE_URL = 'https://api.ZIPAY.id' //'http://172.20.10.2:5000'

export const MERCHANT_ID = 'SIDINARSBP'
export const MERCHANT_TOKEN = '7SERR3d79Q3qzghi4YCA04qQwKn/y3gbe2ZKBmwk/1s='

let token: string | null = null

let headers: {
	[key: string]: string
} = {
	'Content-Type': 'application/json',
	Accept: 'application/json'
}

if (token) {
	headers['Authorization'] = `Bearer ${token}`
}

export const api = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: headers
})
