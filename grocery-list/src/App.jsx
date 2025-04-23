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

  function deleteItem(id) {
    setItems((items) => {
      return items.filter((item) => item.id !== id)
    })
  }

  function onItemSelected(id) {
    setItems((items) => {
      return items.map((item) => {
        return item.id === id ? { ...item, selected: !item.selected } : item
      })
    })
  }

  return (
    <div>
      <Header />
      <div className="container">
        <AddItem addItem={addItem} />
        <ItemsList
          items={items}
          deleteItem={deleteItem}
          itemSelected={onItemSelected}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
