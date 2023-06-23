import { isaac } from "../../utilities/image"


export const Sidebar = () => {
  return (
    <div className="px-3">
        <div className="block lg:flex items-center mt-10">
            <div className="border">
                <img src={isaac} alt="isaac" className="md:object-contain h-1/2 w-[120px]"/>
            </div>
            <div className="mb-4 text-justify px-5">
                <h1 className="text-3xl font-extrabold text-left">Isaac Oluwatobi Sangodare</h1>
                <h3 className="font-semibold">Frontend Developer</h3>
            </div>
        </div>
        <div className="block mt-5 md:flex md:gap-5">
            <h2 className="font-bold">About</h2>
            <div className="text-justify">
                <p>
                Experienced Frontend Engineer with expertise in JavaScript, React, Redux, Next.js, Python, Django, Django Rest Framework, and other technologies. Passionate about creating engaging web experiences, optimizing performance, and ensuring cross-browser compatibility. Proven track record of delivering high-quality, scalable, and maintainable code. Adaptable in fast-paced environments and dedicated to continuous learning. Effective collaborator with a focus on exceptional user experiences.
                </p>
            </div>
        </div>
    </div>
  )
}
