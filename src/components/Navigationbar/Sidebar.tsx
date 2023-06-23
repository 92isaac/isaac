import { isaac } from "../../utilities/image"
import { lasop } from "../../utilities/image"


export const Sidebar = () => {
  return (
    <div className="px-3">
        <div className="block mt-3 lg:flex items-center md:mt-5 lg:mt-10">
            <div className="border">
                <img src={isaac} alt="isaac" className="hidden md:hidden lg:block lg:object-contain h-1/2 w-[120px]"/>
                <img src={lasop} alt="lasop" className="block lg:hidden md:object-contain h-1/2 w-full"/>
            </div>
            <div className="mb-4 text-justify md:px-5">
                <h1 className="md:text-lg lg:text-3xl font-extrabold text-left">Isaac Oluwatobi Sangodare</h1>
                <h3 className="font-semibold">Frontend Developer</h3>
            </div>
        </div>
        <div className="block mt-5 md:block lg:flex lg:gap-5">
            <h2 className="font-bold">About</h2>
            <div className="text-justify">
                <p className="text-xs md:sm lg:text-lg">
                Experienced Frontend Engineer with expertise in JavaScript, React, Redux, Next.js, Python, Django, Django Rest Framework, and other technologies. Passionate about creating engaging web experiences, optimizing performance, and ensuring cross-browser compatibility. Proven track record of delivering high-quality, scalable, and maintainable code. Adaptable in fast-paced environments and dedicated to continuous learning. Effective collaborator with a focus on exceptional user experiences.
                </p>
            </div>
        </div>
    </div>
  )
}
