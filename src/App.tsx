import './App.css'
import { Routes, Route} from 'react-router-dom'
import SharedLayout from './layout/SharedLayout'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'

function App() {
  return (
    <section className='bg-black text-white h-screen overflow-y-auto'>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
      </Route>
    </Routes>
    </section>
  )
}

export default App
