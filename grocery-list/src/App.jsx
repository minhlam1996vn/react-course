import { useState } from 'react'
import './App.css'
import AddItem from './components/AddItem'
import Header from './components/Header'
import ItemsList from './components/ItemsList'
import Footer from './components/Footer'

function App() {
  const [items, setItems] = useState([])

  function addItem(item) {
    setItems((items) => [...items, item])
  }

  return (
    <div>
      <Header />
      <div className="container">
        <AddItem addItem={addItem} />
        <ItemsList items={items} />
      </div>
      <Footer />
    </div>
  )
}

export default App
