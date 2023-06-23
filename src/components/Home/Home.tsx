import { Project } from "../Project/Project"

const Home = () => {
  return (
    <div className="w-full">
        <div className="flex space-between my-0 mx-auto w-10/12 gap-[50px]">
            <Project />
        </div>
    </div>
  )
}

export default Home



//   width: 100%;

//   .home__container {
//     display: flex;
//     justify-content: space-between;
//     margin: 0 auto;
//     margin-top: 90px;
//     width: 85%;
//     gap: 50px;
//   }
//   @media (max-width: 1440px) {
//     .home__container {
//       width: 95%;
//     }
//   }
//   @media (max-width: 1290px) {
//     .home__container {
//       gap: 20px !important;
//     }
//   }
//   @media (max-width: 1200px) {
//     .home__container {
//       flex-direction: column;
//     }
//   }
// `;