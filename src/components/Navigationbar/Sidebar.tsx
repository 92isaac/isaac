import { isaac } from "../../utilities/image"
// import { lasop } from "../../utilities/image"
import { Link } from 'react-router-dom'
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react'
import SlideUp from "../../animation/SlideUp";
import { FadeIn } from "../../animation/FadeIn";

export const Sidebar = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start('animate');
      }
    }, [controls, inView]);
  return (
    <div className="px-4 transform transition duration-1000 ease-in-out">
        <div className="block mt-3 lg:flex items-center md:mt-5 lg:mt-10" ref={ref}>
            <div className="border rounded-md">
                <FadeIn>
                <img src={isaac} alt="isaac" className="hidden rounded-md md:hidden lg:block lg:object-contain h-1/2 w-[120px]"/>
                <img src={isaac} alt="lasop" className="block lg:hidden md:object-contain h-1/2 w-full"/>
                </FadeIn>
            </div>
            <div className="mb-4 md:mb-0 lg:mb-4 text-justify md:px-5">
        <SlideUp animate={controls}>
                <h1 className=" text-2xl md:text-lg lg:text-3xl font-extrabold text-left">Isaac Oluwatobi Sangodare</h1>
            </SlideUp>
                <h3 className="font-semibold">Frontend Developer</h3>
                <h4 className="text-xs">Lagos, Nigeria</h4>
                <h4 className="text-xs">Freelance status: <span className="font-extrabold bg-green-300 rounded-md px-3 md:block lg:inline">Available for work</span></h4>
                <p className="text-xs">
          <Link to="tel:+2348068290320">Telephone: +2348068290320</Link>
        </p>
            </div>
        </div>
        <div className="block lg:mt-5 md:block lg:flex lg:gap-5">
            <h2 className="font-bold">About</h2>
            <div className="text-justify" ref={ref}>
            <SlideUp animate={controls}>
                <p className="text-xs lg:text-sm">
                Experienced Frontend Engineer with expertise in JavaScript, React, Redux, Next.js, Python, Django, Django Rest Framework, and other technologies. Passionate about creating engaging web experiences, optimizing performance, and ensuring cross-browser compatibility. Proven track record of delivering high-quality, scalable, and maintainable code. Adaptable in fast-paced environments and dedicated to continuous learning. Effective collaborator with a focus on exceptional user experiences.
                </p>
            </SlideUp>
            </div>
        </div>
    </div>
  )
}
