import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Searchbox from './Searchbox'
import Infobox from './infobox'
import Weatherapp from './Weatherapp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Weatherapp />
    </>
  )
}

export default App
