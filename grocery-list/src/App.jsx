import './App.css'
import AddItem from './components/AddItem'
import Header from './components/Header'
import ItemsList from './components/ItemsList'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <Header />
      <AddItem />
      <ItemsList />
      <Footer />
    </div>
  )
}

export default App
