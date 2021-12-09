export const getToken = () => {
  return window.localStorage.getItem('token')
}

export const setToken = (token) => {
  window.localStorage.setItem('token', token)
}

export const removeToken = () => {
  window.localStorage.removeItem('token')
}

export const getUser = () => {
  return window.localStorage.getItem('id')
}

export const setUser = (id) => {
  window.localStorage.setItem('id', id)
}

export const removeUser = () => {
  window.localStorage.removeItem('id')
}
