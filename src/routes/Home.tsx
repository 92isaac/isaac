import { useState, useEffect } from "react";
import Skills from "../components/Skills/Skills";
import Loading from "../utilities/Loading";

export const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);
  }, []);

  if (!loading) return <Loading />;

  return <>{loading && <Skills />}</>;
};
