import './App.css'
import { Routes, Route} from 'react-router-dom'
import SharedLayout from './layout/SharedLayout'
import { SingleProject } from './routes/SingleProject'
import { GlobalUseContext } from './utilities/Context'
import { Error } from './routes/Error'
import { Home } from './routes/Home'
import { Projects } from './routes/Projects'



function App() {
  const { checked } = GlobalUseContext()
  return (
    <section className={`  h-screen overflow-y-auto ${checked ? 'bg-[#1F2937] text-white transition duration-1000' : 'text-[#141B2A] bg-white transition duration-1000' }`}>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project/:id' element={<SingleProject />} />
      </Route>
      <Route path='*' element={<Error />} />
    </Routes>
    </section>
  )
}

export default App
