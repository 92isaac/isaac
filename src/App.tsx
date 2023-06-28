import './App.css'
import { Routes, Route} from 'react-router-dom'
import SharedLayout from './layout/SharedLayout'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import { Project } from './routes/Project'
import { GlobalUseContext } from './utilities/Context'

function App() {
  const { checked } = GlobalUseContext()
  console.log(checked)
  return (
    <section className={`  h-screen overflow-y-auto ${checked ? 'bg-black text-white' : 'text-black bg-white' }`}>
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
