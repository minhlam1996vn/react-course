import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function Header() {
  return <h1>Header</h1>
}

function Footer() {
  return <div>Footer</div>
}

function Pizza(props) {
  return (
    <div>
      <img src={props.photoName} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <span>{props.price + 4}</span>
    </div>
  )
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella"
        price={18}
        photoName="http://placehold.co/160x90"
      />
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={4}
        photoName="http://placehold.co/160x90"
      />
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
