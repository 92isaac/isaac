import { useParams } from 'react-router-dom'
import { projects } from '../utilities/data'
import ProjectDetails from '../components/Project/ProjectDetails'
import { useEffect, useState } from 'react';
import Loading from '../utilities/Loading';

interface ProjectItem {
    details: [];
    img: string;
    webLink: string;
    id: string;
  }

export const SingleProject = () => {
    const { id } = useParams<{ id: string }>();
    const displayItems: ProjectItem = projects[id];
    const [loading, setLoading ] = useState(false)


    useEffect(() => {
   setTimeout(()=>{
    setLoading(true)
   }, 3000)
        
    }, [])
    
    if(!loading) return <Loading/>
  return (
    <ProjectDetails {...displayItems}/>
  )
}
