import './App.css'
import { Routes, Route} from 'react-router-dom'
import SharedLayout from './layout/SharedLayout'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import { Project } from './routes/Project'

function App() {
  return (
    <section className='bg-black text-white h-screen overflow-y-auto'>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route path='/' element={<Skills />} />
        <Route path='/projects' element={<Home />} />
        <Route path='/project/:id' element={<Project />} />
      </Route>
    </Routes>
    </section>
  )
}

export default App
