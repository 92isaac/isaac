import './App.css'
import { lazy, Suspense } from 'react'
import { Routes, Route} from 'react-router-dom'
import SharedLayout from './layout/SharedLayout'
import { GlobalUseContext } from './utilities/Context'
import { Error } from './routes/Error'
import Loading from './utilities/Loading'
// import { SingleProject } from './routes/SingleProject'
// import { Home } from 
// import { Projects } from './routes/Projects'


const Home = lazy(()=>import('./routes/Home'))
const Projects = lazy(()=>import('./routes/Projects'))
const SingleProject = lazy(()=>import('./routes/SingleProject'))


function App() {
  const { checked } = GlobalUseContext()
  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  )
}

export default App
