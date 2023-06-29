import { useState, useEffect } from 'react';
import ProjectHome1 from "../components/Project/ProjectHome"
import Loading from '../utilities/Loading';

export const Projects = () => {
    const [loading, setLoading ] = useState(false)


    useEffect(() => {
   setTimeout(()=>{
    setLoading(true)
   }, 2000)
        
    }, [])
    
    if(!loading) return <Loading/>
  return (
    <ProjectHome1/>
  )
}
