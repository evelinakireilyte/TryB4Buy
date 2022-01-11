import axios from 'axios'
import { getToken } from './auth.js'

const baseUrl = '/api'

export const fetchItems = async () => {
  const config = {
    method: 'get',
    url: `${baseUrl}/items/all/`,
    headers: {},
  }
  const response = await axios(config)
  console.log(response)
  return response.data
}

export const fetchItem = async (id) => {
  const config = {
    method: 'get',
    url: `${baseUrl}/items/detail/${id}/`,
    headers: {},
  }
  const response = await axios(config)
  console.log(response.data)
  return response.data
}

export const deleteItem = async (id) => {
  const config = {
    method: 'delete',
    url: `${baseUrl}/items/detail/${id}/`,
    headers: {
      Authorisation: `Bearer ${getToken()}`,
    },
  }
  const response = await axios(config)
  return response.data
}

export const login = async (data) => {
  return makeAxiosRequest('auth/login/', data)
}

export const register = (data) => {
  return makeAxiosRequest('auth/register/', data)
}

const makeAxiosRequest = async (url, data) => {
  const config = getAxiosRequestConfig(url, data)

  const response = await axios(config)
  return response.data
}

export const getAxiosRequestConfig = (requestUrl, data, method = 'post') => {
  const config = {
    method,
    url: `${baseUrl}/${requestUrl}`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
    //The "payload" or the "body" of the request: the important info to send as JSON
    data,
  }
  console.log(config)
  return config
}

export const getAxiosPutRequestConfig = (requestUrl, data, method = 'put') => {
  const config = {
    method,
    url: `${baseUrl}/${requestUrl}`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
    //The "payload" or the "body" of the request: the important info to send as JSON
    data,
  }
  return config
}

export const getAxiosDeleteRequestConfig = (requestUrl, method = 'delete') => {
  const config = {
    method,
    url: `${baseUrl}/${requestUrl}`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
    //The "payload" or the "body" of the request: the important info to send as JSON
  }
  return config
}
