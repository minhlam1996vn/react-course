import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'
import PageNav from './components/PageNav'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
import CitiesList from './pages/CitiesList'
import { useEffect, useState } from 'react'

function App() {
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(false)

  const citiesUrl = 'http://localhost:9001/cities'
  async function fetchCities() {
    try {
      setLoading(true)
      let response = await fetch(citiesUrl)
      let cities = await response.json()
      setCities(cities)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }
  useEffect(function () {
    console.log('da vao day')
    fetchCities()
  }, [])

  return (
    <div>
      <div>Layout</div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CitiesList cities={cities} loading={loading} />}
            />
            <Route
              path="cities"
              element={<CitiesList cities={cities} loading={loading} />}
            />
            <Route path="countries" element={<div>Countries list</div>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
