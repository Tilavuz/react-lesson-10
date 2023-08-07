import './App.css'
import { Routes, Route } from 'react-router-dom'


// Components
import Home from './components/home/Home'
import About from './components/about/About'
import Header from './components/header/Header'

function App() {
  


  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/:id' element={<About />} />
      </Routes>


    </div>
  )
}

export default App