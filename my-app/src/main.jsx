import React from 'react'
import ReactDOM from 'react-dom/client'

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
      <h2>Pizza Title</h2>
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
    <div>
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
