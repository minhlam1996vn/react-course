import './App.css'
import Counter from './Counter'
import { CounterProvider } from './CounterContext'

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  )
}

export default App

// import { useState } from 'react'
// import './App.css'
// import Counter from './Counter'

// function App() {
//   const [count, setCount] = useState(0)

//   function increment() {
//     setCount((prevCount) => prevCount + 1)
//   }

//   function decrement() {
//     setCount((prevCount) => prevCount - 1)
//   }

//   function reset() {
//     setCount(0)
//   }

//   return (
//     <>
//       <Counter
//         count={count}
//         increment={increment}
//         decrement={decrement}
//         reset={reset}
//       />
//     </>
//   )
// }

// export default App
