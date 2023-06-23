 import { FiExternalLink } from 'react-icons/fi'
// import { useRef } from 'react'
import styled from "styled-components";
import { projects } from '../../utilities/data'
export const Project = () => {
  return (
    <Wraper>
        <div className="project__container">
        <div className="flex gap-2 flex-wrap" >
          {projects.map((project) => (
            <div className="w-[300px] h-[380px] relative">
              <img src={project.img} alt="project " className='w-full h-full object-cover'/>
              <div className="desciption">
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <div className="tools">
                  <a href={project.webLink} target="_blank" rel="noreferrer">
                    Website <FiExternalLink />
                  </a>
                  <ul>
                    <li>React</li>
                    <li>Styled components</li>
                    <li>Axios</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wraper>
  )
}

// export const Wrapper = styled.div`
//   width: 50%;
//   .project {
//     display: flex;
//     /* justify-content: center; */
//     gap: 7px;
//     flex-wrap: wrap;
//   }
//   .project__card {
//     width: 300px;
//     height: 380px;
//     position: relative;
//     > img {
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//     }
//     &:hover {
//       .desciption {
//         opacity: 1;
//       }
//     }
//   }
//   .desciption {
//     position: absolute;
//     bottom: 0;
//     background-color: rgba(0, 0, 0, 0.8);
//     width: 100%;
//     > h1 {
//       font-size: 700;
//       color: var(--clr-white);
//       font-size: 1.8rem;
//       text-align: center;
//       margin-top: 40px;
//       margin-bottom: 2px;
//     }
//     > p {
//       text-align: center;
//       color: var(--clr-black-2);
//       margin-bottom: 35px;
//       font-size: 0.9rem;
//       font-weight: 500;
//     }
//     opacity: 0;
//     transition: 1s;
//   }
//   .tools {
//     display: flex;
//     justify-content: space-between;
//     padding: 0 10px;
//     > a {
//       text-decoration: none;
//       color: var(--clr-black-2);
//       font-size: 0.7rem;
//       cursor: pointer;
//     }
//     ul {
//       display: flex;
//       list-style: none;
//       gap: 10px;
//       li {
//         color: var(--clr-black-2);
//         font-size: 0.7rem;
//       }
//     }
//   }
//   .skill {
//     margin-top: 70px;
//     h1 {
//       font-size: 1.3rem;
//       font-weight: 600;
//       margin-bottom: 20px;
//       color: var(--clr-white);
//     }
//     .skill_cardContainer {
//       display: flex;
//       gap: 12px;
//       margin-bottom: 20px;
//     }

//     h2 {
//       color: var(--clr-white);
//       font-weight: 600;
//       font-size: 0.9rem;
//       background-color: var(--clr-black-3);
//       padding: 13px 40px;
//       transition: font-size 0.3s;
//       &:hover {
//         font-weight: 700;
//         font-size: 1.2rem;
//         /* padding: 15px 42px; */
//       }
//     }
//   }
//   @media (max-width: 1290px) {
//     /* width: 40%; */
//     .project__card {
//       width: 280px;
//       height: 360px;
//     }
//   }
//   @media (max-width: 1200px) {
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     .project__container {
//       width: 100%;
//     }
//     .project {
//       justify-content: center;
//     }
//     .project__card {
//       width: 370px;
//       height: 420px;
//       margin-bottom: 10px;
//     }
//     .skill {
//       width: 70%;
//       margin: 0 auto;
//     }
//   }
//   @media (max-width: 1089px) {
//     .skill {
//       width: 80%;
//       margin: 0 auto;
//     }
//   }
//   @media (max-width: 900px) {
//     .skill {
//       width: 90%;
//       margin: 0 auto;
//     }
//     .desciption {
//       opacity: 1;
//     }
//   }
//   @media (max-width: 800px) {
//     .project__card {
//       width: 280px;
//       height: 360px;
//     }
//     .skill {
//       width: 85%;
//       margin: 0 auto;
//     }
//   }
// `;


const Wraper = styled.div`
`