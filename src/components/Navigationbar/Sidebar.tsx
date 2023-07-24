import { isaac } from "../../utilities/image"
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react'
import SlideUp from "../../animation/SlideUp";
import { FadeIn } from "../../animation/FadeIn";

export const Sidebar = () => {
  // const year = new Date().getFullYear();
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start('animate');
      }
    }, [controls, inView]);
  return (
    <div className="mx-4 md:px- transform transition duration-1000 ease-in-out">
        <div className="block mt-3 lg:flex items-center md:mt-2 lg:mt-10" ref={ref}>
            <div className="lg:border rounded-md dance">
                <FadeIn>
                <img src={isaac} alt="isaac" className="hidden rounded-md md:hidden lg:block lg:object-contain h-1/2 w-[120px]" loading="lazy"/>
                <img src={isaac} alt="lasop" className="block lg:hidden  md:object-contain h-[100px] w-[100px] mx-aut my-0 rounded-full" loading="lazy"/>
                </FadeIn>
            </div>
            <div className="mb-4 md:mb-0 lg:mb-4 text-justify lg:px-5">
        <SlideUp animate={controls}>
                <h1 className=" text-2xl md:text-lg lg:text-3xl font-extrabold text-left">Isaac Oluwatobi Sangodare</h1>
            </SlideUp>
                <h3 className="font-semibold">Frontend Developer</h3>
                <h4 className="text-xs font-semibold">Lagos, Nigeria</h4>
                <h4 className="text-xs py-1 animate-pulse font-semibold">Freelance status: <span className="font-extrabold animate-blink bg-green-300 rounded-md px-3 md:block lg:inline text-black">Available to work</span></h4>
                <p className="text-xs">
          <Link to="tel:+2348068290320" className="font-semibold">Phone: +2348068290320</Link>
        </p>
        <p className="text-xs lg:text-sm font-semibold">
          <Link to="mailto:sangodareisaac92@gmail.com">
            sangodareisaac@gmail.com
          </Link>
        </p>
            </div>
        </div>
        <div className="block lg:mt-5 md:block lg:flex lg:gap-5">
            <h2 className="font-bold">About</h2>
            <div className="text-justify" ref={ref}>
            <SlideUp animate={controls}>
                <p className="text-sm pb-5 md:pb-0 md:text-xs lg:text-lg">
                Experienced Frontend Engineer with expertise in JavaScript, React, Redux, Next.js, Python, Django, Django Rest Framework, and other technologies. Passionate about creating engaging web experiences, optimizing performance, and ensuring cross-browser compatibility. Proven track record of delivering high-quality, scalable, and maintainable code. Adaptable in fast-paced environments and dedicated to continuous learning. Effective collaborator with a focus on exceptional user experiences.
                </p>
            </SlideUp>
            </div>
        </div>

        <div className="md:hidden mb-2">
        <ul className="flex justify-center items-center gap-2 text-sm lg:text-sm">
          <li>
            <Link to="https://www.linkedin.com/in/isaac-sangodare-744765148/">
              <FiLinkedin className="" />
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="https://twitter.com/SangoTobi"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterSquare />
            </Link>
          </li>

          <li>
            <Link
              to="https://www.instagram.com/donibot/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link to="https://github.com/92isaac">
              <FiGithub className="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
