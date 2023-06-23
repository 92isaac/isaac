import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Navigationbar/Sidebar'
import { Footer } from '../components/Footer/Footer'
import { MobileFooter } from '../components/Footer/MobileFooter'
import { Navbar } from '../components/Navigationbar/Navbar'

const SharedLayout = () => {
  return (
    <div className=''>
        <div className="block md:flex gap-3">
            <div className="md:w-1/3 md:h-screen border rounded-md my-1 w-full md:fixed">
                <Sidebar/>
            </div>
            <div className=" w-full md:w-2/3 relative mt-1 rounded-md md:ml-[34%]">
                <div className="border rounded-md">
                   <Navbar />
                </div>
                <main className="mb-10 md:h-[85vh] overflow-y-scroll my-2 border rounded-md">
                    <Outlet/>
                </main>
                <div className="w-full h-10 fixed bottom-0 border rounded-md md:w-8/12 z-50">
                  <Footer/>
                  <MobileFooter />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SharedLayout