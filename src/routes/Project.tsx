import { useParams } from 'react-router-dom'
import { projects } from '../utilities/data'
import ProjectDetails from '../components/Project/ProjectDetails'

interface ProjectItem {
    details: [];
    img: string;
    webLink: string;
    id: string;
  }

export const Project = () => {
    const { id } = useParams<{ id?: string }>();
    const displayItems: ProjectItem = projects[id];
  return (
    <ProjectDetails {...displayItems}/>
  )
}
