import { useState, useEffect } from "react";
import Skills from "../components/Skills/Skills";
import Loading from "../utilities/Loading";
// // import Seo from "../utilities/Seo"
// import { Seo } from "../utilities";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  // const currentUrl = window.location.href;
  // const canonicalUrl = currentUrl.split('?')[0].split('#')[0];

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);
  }, []);

  if (!loading) return <Loading />;

  return <>
  {/* <Seo title="skills" description="Welcome to Sangodare Isaac portfolio, this sections showcase both tecnical, interporsonal skill i have aquired over the years" type="skills" url={canonicalUrl}/> */}
  {loading && <Skills />}
  </>;
};
