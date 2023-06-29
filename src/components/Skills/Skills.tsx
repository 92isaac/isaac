import { skills } from "../../utilities/data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
// import SlideUp from "../../animation/SlideUp";
import { FadeIn } from "../../animation/FadeIn";

const childVariant ={
  hidden: {opacity:0, scale: 0.9},
  visible: {opacity:1, scale:1}
}


const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);
  return (
    <div className="w-full">
      <div className="my-0 mx-auto w-10/12 gap-[50px]" ref={ref}>
        {skills.map((skill)=>(
            <div className="my-5" key={skill.name}>
            <h1 className="text-lg font-bold mb- mt- capitalize ">{skill.name}</h1>
        <FadeIn>

           <div className="flex items-center gap-4 mt-2 flex-wrap mb-6">{
            skill.list.map((list, index)=>(
                <h2 className="text-sm font-normal px-3 py-2 transform hover:scale-105 transition duration-1000 ease-in-out hover:font-extrabold hover:text-lg border rounded-md bg-gradient-to-br from-gray-400 to-gray-100 hover:from-gray-100 hover:to-gray-400" key={index}><motion.span
                variants={childVariant}
                >{list}</motion.span></h2>
            ))
            }</div>
            </FadeIn>
              </div>
               
        ))}
      </div>
    </div>
  );
};

export default Skills;


