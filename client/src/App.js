import React, { useEffect, useState } from 'react'

import { getToken } from './helpers/auth'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import ItemAdd from './pages/ItemAdd'
import Login from './pages/Login'
import Register from './pages/Register'
import ItemList from './pages/ItemList'
import ItemShow from './pages/itemshow'
import ItemEdit from './pages/ItemEdit'
// import NotFound from "./pages/NotFound"
import Profile from './pages/Profile'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<ItemList />} />
            <Route path="/items/:id" element={<ItemShow />} />
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/items/post" element={<ItemAdd />} />
            <Route path="/items/:id/edit" element={<ItemEdit />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            {/* <Route element={<NotFound />} /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}
export default App
