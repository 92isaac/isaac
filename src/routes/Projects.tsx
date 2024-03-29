import { useState, useEffect } from "react";
import ProjectHome1 from "../components/Project/ProjectHome";
import Loading from "../utilities/Loading";

 const Projects = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  if (!loading) return <Loading />;
  return <ProjectHome1 />;
};


export default Projects