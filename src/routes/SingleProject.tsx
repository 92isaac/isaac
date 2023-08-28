import { useParams } from "react-router-dom";
import { projects } from "../utilities/data";
import ProjectDetails from "../components/Project/ProjectDetails";
import { useEffect, useState } from "react";
import Loading from "../utilities/Loading";

interface ProjectType {
  id: string;
  img: string;
  name: string;
  description: string;
  details: string[];
  technologies: string[];
  webLink: string;
}

 const SingleProject = () => {
  const { id } = useParams<{ id: string }>();
  // const displayItems: ProjectType = projects[id];
  const [loading, setLoading] = useState(false);
  // const displayItems: ProjectType = projects.find((project) => project.id === id);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const displayItems: ProjectType = projects.find(
    (project) => project.id === id
  )!;

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  if (!loading) return <Loading />;
  return <ProjectDetails {...displayItems} />;
};

export default SingleProject