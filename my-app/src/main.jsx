import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function Header() {
  return <h1>Header</h1>
}

function Footer() {
  return <div>Footer</div>
}

function Pizza() {
  return (
    <div>
      <img src="https://placehold.co/160x90" alt="Pizza" />
      <h3>Pizza Title</h3>
      <div>Pizza Description</div>
    </div>
  )
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
    </div>
  )
}

export function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
