/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";



 export interface Props {
    details: string[];
    img: string;
    webLink: string;

  }

const ProjectDetails: React.FC<Props> = ({ img, details, webLink }) => {

  const navigate = useNavigate()

  return (
    <Wrapper>
    <div className="grid grid-cols-[repeat(auto-fit, minmax(15rem, 1fr))] gap-4">
        <img src={img} alt="" className="w-full h-auto object-cover"/>
      <div>
        <div className="items-center m-4">
            <ul className="text-xs text-justify md:text-sm font-bold italic mb-2" >
              {details?.map((point:any, index)=>(<li key={index}>{point}</li>))}
            </ul>
        </div>
      </div>
    </div>
      <div className="flex justify-center m-4 items-center">
        <Button onClick={()=>navigate(-1)} rel="noopener noreferrer">
          Go back
        </Button>
        <Button href={webLink} target="_blank" rel="noopener noreferrer">
          Product URL
        </Button>
      </div>
    </Wrapper>

  );
};

export default ProjectDetails;


const Wrapper = styled.div`
  width: 90%;
  margin:10px auto
  `;

const Button = styled.a`
  padding: 0.5rem 2rem;
  margin: 0 0.5rem;
  background-color: #1f2937;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4b5563;
  }

  @media (max-width: 600px) {
    a{
      display: block;
    }
  }
`;

