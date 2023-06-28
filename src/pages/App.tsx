import { useState } from 'react'
import HeaderNavComponent from '../components/HeaderNavComponent'
import '../styles/App.css'


function App() {
  const [size, setSize] = useState("")
  const getSize = () => {
    setSize(window.outerWidth.toString())
  }

  return (
    <div className='home'>
      <HeaderNavComponent/>
      <main>
        <div className='profile'>
          <div></div>
          <div>
            <div><div className='image-home'></div></div>
            <div></div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
