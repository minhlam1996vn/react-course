import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'http://placehold.co/160x90',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'http://placehold.co/160x90',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'http://placehold.co/160x90',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'http://placehold.co/160x90',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'http://placehold.co/160x90',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'http://placehold.co/160x90',
    soldOut: false,
  },
]

function Header() {
  //const style = { fontSize: '24px', color: 'red', textTransform: 'uppercase' };
  return (
    <div className="header">
      <h1>Leela Pizza App</h1>
    </div>
  )
}

function Footer() {
  const currentHour = new Date().getHours()
  const openHour = 10
  const closedHour = 22
  const isOpen = currentHour >= openHour && currentHour <= closedHour

  if (!isOpen) {
    return <p>We are closed!!</p>
  }

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closedHour={closedHour} openHour={openHour} />
      ) : (
        <p>We are closed!!</p>
      )}
    </footer>
  )
}

function Order({ openHour, closedHour }) {
  return (
    <div className="order">
      <p>
        We are open from {openHour}:00 to {closedHour}:00. Come and visit us or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  )
}

function Pizza({ pizzaObj }) {
  if (pizzaObj.soldOut) return null

  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  )
}

function Menu() {
  const pizzas = pizzaData
  const numPizzas = pizzas.length

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : null}
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
