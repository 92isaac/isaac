import { skills } from "../../utilities/data";

const Skills = () => {
  return (
    <div className="w-full">
      <div className="my-0 mx-auto w-10/12 gap-[50px]">
        {skills.map((skill)=>(
            <div className="my-5" key={skill.name}>
            <h1 className="text-lg font-bold mb- mt- capitalize ">{skill.name}</h1>
           <div className="flex items-center gap-4 mt-2 flex-wrap mb-6">{
            skill.list.map((list, index)=>(
                <h2 className="text-sm font-normal px-3 py-2 transform hover:scale-105 transition duration-1000 ease-in-out hover:font-extrabold hover:text-lg border rounded-md" key={index}>{list}</h2>
            ))
            }</div>
              </div>
               
        ))}
      </div>
    </div>
  );
};

export default Skills;


