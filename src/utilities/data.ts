import {
  lasop,
  fresh,
  tokosmile,
  hernalytics,
  geotravels,
  ecommerce,
  home,
  prevPortfolio1,
  prevPortfolio2,
  weatherapp,
  mealrecipe,
  ggicc,
  getlinked
} from "./image";

interface ProjectType  {
  id: string;
  img: string;
  name: string;
  technologies:string[];
  description: string;
  details: string[];
  webLink: string;
}

export const projects: ProjectType[] = [
  {
    id: '00z7ai',
    img: getlinked,
    name: "GetLinkedAi",
    description: "Crafted during a hackathon, this project showcases a seamless fusion of front-end development and back-end integration, elevating user interface design to new heights. Leveraging a tech stack that includes React with TypeScript, Axios for API connectivity, Tailwind CSS for stylish and responsive layouts, and JavaScript IntersectionObserver for captivating animations, this endeavor represents a harmonious marriage of cutting-edge technologies.", 
    technologies: ['React', 'TypeScript', 'Axios', 'Tailwind CSS', 'JavaScript IntersectionObserver'],
    details: [
      "Leveraged React and TypeScript to build a robust, interactive UI, facilitating dynamic user experiences.",
      
      "Employed Axios for streamlined API integrations, enabling efficient data retrieval and submission.",
      
      "Enhanced the user interface with Tailwind CSS, ensuring a polished and visually appealing design while maintaining scalability and responsiveness.",
      
      "Implemented JavaScript IntersectionObserver to introduce engaging slide-in animations, enhancing the visual appeal and user engagement of the platform."
    ],
    
    webLink: "https://get-linked-weld.vercel.app/",
  },
  {
    id: '11g67dk',
    img: ggicc,
    name: "GGICC",
    description: `Proposed web revamp of 'www.ggicc.ca'. The new website design presents a transformative and visually appealing digital platform that complements the client's role as a dedicated immigration expert and social worker. By seamlessly combining functionality and aesthetics, the revamped website serves as an engaging gateway for individuals seeking immigration guidance to Canada.`,
    technologies:['React', 'Firebase', 'Rest API', 'Axios'],
    details: [
      "The website now showcases a beautifully redesigned client profile section. It vividly presents the client's credentials, qualifications, and compassionate approach as an 'Immigration Doctor' – reinforcing trust and expertise.",
      "The website prominently displays a comprehensive list of partner schools, fostering an aura of collaboration and legitimacy. The user-friendly interface allows visitors to explore these educational institutions effortlessly.",
      "To achieve the aim of the school, the project was built with React library",
      "The addition of a user-friendly booking option enables visitors to conveniently schedule personalized, one-on-one meetings with the client. This feature enhances user engagement and establishes a direct line of communication",
      "The website's visual elements have been meticulously revamped, incorporating modern aesthetics, colors, and typography. The design conveys professionalism, empathy, and a welcoming atmosphere.",
      "The revamped website boasts a responsive design, ensuring a consistent and enjoyable user experience across various devices, from desktops to smartphones through the use of tailwind CSS.",
    ],
    webLink: "https://ggicc.vercel.app/",
  },
  {
    id: '1p20fg',
    img: geotravels,
    name: "Geotravels",
    description: "A travel guide website. Geotravels is visually stunning and user-friendly platform that seamlessly connects travelers with their dream destinations. Travel options are available for users to browse through effortlessly, accessing detailed itineraries and booking their trips securely with ease. By offering extensive details, easy reservation procedures, and a visually captivating website that sparks wanderlust, our solution elevates the overall travel experience.",
    technologies:['Redux toolkit', 'Redux', 'React', 'Tailwind CSS','Styled-Component', 'Rest API', 'Axios'],
    details: [
      "The project creates a dynamic and immersive online platform that showcases breathtaking destinations, provides seamless booking experiences, and offers comprehensive travel information.",
      "To achieve a responsive design and intuitive user interfaces, I used tailwind CSS and also Styled Components.  it prioritizes user engagement and satisfaction, ensuring easy navigation and captivating visuals.",
      " For effective state management across the project, the Redux toolkit state management library was put to use.",
      "In line with the industry's best practices, React Hooks, was incorporated into this project. ",
      "Leveraging cutting-edge technologies and a robust backend infrastructure through the team of developers coming together on this project, my team player ability was stretched.",
    ],
    webLink: "https://www.gowithgeo.com/",
  },
  {
    id: '0z87ki',
    img: lasop,
    name: "LASOP",
    description: "Modification of LASOP made accessing course materials seamlessly promotes efficient collaboration and enhances educational experience. It promotes a robust feeling of togetherness in the school environment. The Implementation of a responsive design, cross-browser compatibility, and mobile-first website increased mobile traffic by 20%",
    technologies:['React', 'Bootstrap', 'Rest API', 'Axios'],
    details: [
      "Redesigning of Lagos School of Programming website came up with the intention to create an advanced and simple-to-use digital system that acts as a hub connecting students, teachers along with parents. By using responsive design along with streamlined navigation it aims towards prioritizing accessibility as well as user-friendliness. This ensures that there is easy access to important school information like resources or communication channels.",
      "To achieve the aim of the school, the project was built with React library",
      " Built the project using the Bootstrap framework to achieve a responsive, user-friendly user interface.",
      "API integrations were made possible through the use of the Axios data-fetching library",
    ],
    webLink: "https://lasop.net/",
  },
  {
    id: '2m12sd',
    img: tokosmile,
    name: "Tokosmile",
    description: "Tokosmile empowers businesses to showcase their products, manage inventory, and process transactions efficiently. It prioritizes performance optimization, responsive design, and personalized shopping recommendations to enhance customer satisfaction and drive sales growth. It is a polished and user-centric website that seamlessly blends captivating visuals, intuitive navigation, and efficient functionality. By leveraging cutting-edge technologies such as React, Redux Toolkit, and Tailwind CSS, we have created a dynamic and responsive platform that enhances user engagement and satisfaction. Our solution reflects meticulous attention to detail, delivering a seamless user experience and setting a new standard in web development.",
    technologies:['Redux toolkit', 'RTK Query', 'React', 'Tailwind CSS', 'Rest API', 'TypeScript'],
    details: [
      "This project revolves around creating a robust and secure online platform that enables seamless shopping experiences for customers. With a user-friendly interface, intuitive navigation, and a secure payment gateway.",
      "Leveraged React to build the interactive user interface of the e-commerce web application and Typescript for type check.",
      "Utilized Redux Toolkit for state management, ensuring a predictable and scalable data flow within the application.",
      "Employed Redux Toolkit Query for efficient data fetching and management, ensuring seamless integration with the backend APIs.",
      "Implemented Tailwind CSS to create a responsive and visually appealing design, delivering an exceptional user experience.",
    ],
    webLink: "https://tokosmile.vercel.app/",
  },
  {
    id: '3l53ju',
    img: hernalytics,
    name: "Hernalytic",
    description: "Election Data Result bank",
    technologies:[ 'Axios', 'React', 'Tailwind CSS', 'Rest API', ],
    details: [
      "Built a web application that analyzes and displays election results in a user-friendly manner. The application is built with HTML, CSS, tailwind CSS, JavaScript, and React, and connects to a production-ready API for retrieving the data(API integrations). To effectively represent and analyze the data, I implemented different types of charts. Additionally, I incorporated an SVG map to provide an intuitive display of the election results by state. To ensure the application meets industry standards, I implemented error handling using best practices.",
      "I successfully developed a production-ready election result analysis webpage that connects to a powerful API. The user interface was designed to provide an immersive experience, with a variety of charts and graphs representing the analyzed data. To better visualize the result, I implemented an SVG map that accurately displays the results for each state of the federation. Furthermore, I ensured that industry best practices were followed when handling errors, ensuring the website runs smoothly. Overall, the project provides valuable insights into election results, enabling users to make informed decisions based on the analyzed data.",
    ],
    webLink: "https://hernalytics-test.netlify.app/",
  },
  {
    id: '4q92nd',
    img: ecommerce,
    name: "The Shop",
    description: "TheShop empowers businesses to showcase their products, manage inventory, and process transactions efficiently. It prioritizes performance optimization, responsive design, and personalized shopping recommendations to enhance customer satisfaction and drive sales growth. It is a polished and user-centric website that seamlessly blends captivating visuals, intuitive navigation, and efficient functionality.",
    technologies:['useReducer', 'Context API', 'React', 'Styled-Component', 'Rest API', 'Axios'],
    details: [
      "A dynamic and intuitive platform, designed to deliver an exceptional shopping experience.",
      "Utilizing  useReducer  and  useContext  for  optimized  state  management,  axios  for  back-end communication, and react-router-dom for routing, the website offers a seamless navigation. ",
      "The visually appealing interface, built with tailwind CSS and react-icons, enhances user engagement. Lazy loading optimizes page loading speed, ensuring a fast and smooth user experience.",
    ],
    webLink: "https://bright-gumdrop.netlify.app/",
  },
  {
    id: '5p74ba',
    img: weatherapp,
    name: "Weatherify",
    description: "Weatherify is a web-based weather app that provides real-time weather information and forecasts for any location around the world. It utilizes the OpenWeatherMap API to fetch accurate weather data and presents it in a visually appealing and user-friendly interface.",
    technologies:['HTML', 'CSS', 'Javascript', 'Axios', 'Api Integration', 'Responsive Web Design', 'Error Handling'],
    details: [
      "Weatherify shows the current date, time, and weather conditions, ensuring users get up-to-date information at their fingertips.",
      "The app is designed to be responsive, adapting seamlessly to different screen sizes and devices, including mobile phones and tablets.",
      "Weatherify uses the Geolocation API to automatically detect the user's current location and display the weather details for their area. This feature ensures a personalized experience for every user.",
      "The app provides a 5-day weather forecast, enabling users to plan ahead and be prepared for changing weather conditions.",
      "Weatherify boasts a visually engaging background image that complements the weather information, creating an immersive experience for users.",
      "Moment.js is employed to format dates and times in a human-readable format, making it easier for users to understand sunrise, sunset, and forecast timings.",
      "The app uses appropriate weather icons from OpenWeatherMap to visually represent the current weather and forecast."
    ],
    webLink: "https://weatherapp-orcin-three.vercel.app/",
  },
  {
    id: '6q50wa',
    img: home,
    name: "Funiture store",
    description: "Home page",
    technologies:['HTML', 'CSS', 'Javascript', ],
    details: [
      "Developed a responsive website using HTML, CSS, and JavaScript to showcase a hero section with an image carousel and text content that dynamically changes based on the selected image.",
      "Utilized CSS grid and flexbox to create a responsive layout that adjusts to different screen sizes.",
      "Implemented JavaScript functions to enable users to navigate through the image carousel using left and right arrows, and a toggle button to show or hide a navigation menu.",
    ],
    webLink: "https://92isaac.github.io/room-homepage-master/",
  },
  {
    id: '7m31yu',
    img: fresh,
    name: "Movify App",
    description: "Movify is a dynamic and immersive viewing experience to users by integrating with the TMDB API to provide up-to-date information on the latest movies and TV shows. Using HTML, CSS, Bootstrap, JavaScript, and Axios, I built a platform that efficiently communicates with the API, while also providing a responsive design that adapts to different screen sizes. Our website is a user-friendly and aesthetically pleasing platform that enhances our users' movie and TV show viewing experience",
    technologies:['HTML', 'CSS', 'Javascript','API', 'Axios', 'Bootstrap' ],
    details: [
      "Built a dynamic  platform  that  delivers  an  immersive  viewing  experience.  Built  using  HTML,  CSS, Bootstrap,  JavaScript  and  Axios,  the  website  integrates  with  the  TMDB  API  to  provide  users  with up-to-date information on the latest movies and TV shows.",
      "The  use  of  Axios ensures  efficient  communication  with  the  API,  while  Bootstrap provides  a responsive design that adapts to different screen sizes. ",
      "With its sleek and user-friendly interface, the website offers a smooth navigation and an engaging user  experience.  This  project  showcases  our  skills  in  web  development  and  API  integration, delivering a high-quality movies website that meets the demands of the modern user.",
    ],
    webLink: "https://92isaac.github.io/Movie-app/",
  },
  {
    id: '8t30gh',
    img: prevPortfolio1,
    name: "Portfolio",
    description: "Previous Portfolio",
    technologies:['HTML', 'CSS', 'Javascript', ],
    details: [],
    webLink: "https://92isaac.github.io/sangodare-isaac/#",
  },
  {
    id: '9y65md',
    img: mealrecipe,
    name: "Meal Recipe",
    description: "Foodify is a web-based meal and recipe app that allows users to search for meals based on the ingredients they have. It utilizes the MealDB API to fetch a wide variety of meal options, and users can access detailed recipes for each meal. \n \n Foodify showcases a user-friendly interface with a focus on usability and convenience. The ability to search for meals based on available ingredients empowers users to get creative with their cooking choices. The integration of video links and modal window enhances the user experience by providing interactive and accessible recipe details.",
    technologies:['HTML', 'CSS', 'Javascript', 'Axios', 'Rest Api'],
    details: [
      "Foodify enables users to search for meals by entering ingredients they have in their kitchen, making it convenient to find recipes based on available items.",
      "The app displays an inspiring quote by Jamie Oliver to create a positive user experience and encourage culinary creativity.",
      "Foodify is designed to be responsive, ensuring seamless functionality across different devices, from desktops to mobile phones.",
      "Users can click on the 'Get Recipe' button to view the detailed instructions for each meal, along with a relevant meal image.",
      "Foodify provides a link to a video for each recipe, helping users learn the cooking process visually.",
      "The app utilizes a modal window to display detailed recipe information in a clean and organized manner.",

    ],
    webLink: "https://mealrecipe-app.netlify.app/",
  },
  {
    id: '10z65mv',
    img: prevPortfolio2,
    name: " Portfolio",
    description: "Previous Portfolio",
    technologies:['React', 'Styled-Component', 'Rest API', 'Tailwind css'],
    details: [],
    webLink: "https://sangodare-isaac-portfolio.vercel.app/",
  },
];

export const skills = [
  {
    name:'languages',
    list: ["HTML", "CSS", "JavaScript", "TypeScript", 'Python'],
  },
  {
    name:'framework',
    list: [
      "JQuery",
      "Next",
      "Django", 
      "Django Rest Framework",
      "Styled Components",
      "Material UI",
      "SAAS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    name:'libraries',
    list: [
      "React",
      "Firebase",
      "Redux Toolkit",
      "RTK Query",
      "framer-motion",
      "Axios",
      "JWT",
      "react-router",
      "Auth0",
    ],
  },
  {
    name:'Tools',
    list: [
      'Github',
      'Postman'
    ],
  },
  {
    name:' Volunteer Experience',
    list: [
      'Teens Can Code', 'Genesys Upskill Mentor'
    ],
  },
  {
    name:'Soft Skills',
    list: [
      "Detailed",
      "Strong communicator",
      "Proactive",
      "Analytical",
      "Strong collaborator",
      "Time Manager",
      "Self learning",
    ],
  },
 
];
