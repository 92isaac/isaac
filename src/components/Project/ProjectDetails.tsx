/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export interface Props {
  details: string[];
  technologies: string[];
  description: string,
  img: string;
  webLink: string;
}

const ProjectDetails: React.FC<Props> = ({
  img,
  details,
  technologies,
  description,
  webLink,
}) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="grid  gap-4">
        <img
          src={img}
          alt=""
          className="w-full h-auto object-cover"
        />
        <div>
          <div className="items-center my-4">
            <div className="mb-3">
              <h1 className="font-semibold">Overview:</h1>
              <p className="">{description}</p>
            </div>
            <h1 className="font-semibold">Features:</h1>
            <ul className="text-xs text-justify md:text-sm italic mb-2">


              {details?.map((point: any, index) => (
                <li className="list-disc md:text-xs lg:text-sm" key={index}>
                  {point}
                </li>
              ))}
            </ul>
            <div className="">
              <p className="text-xs font-bold mb-1">Technologies used</p>
              <div className="flex gap-2 flex-wrap">
                {technologies.map((tech, index) => (
                  <span
                    className="text-xs border rounded-md block px-2"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center mb-10 items-center">
        <Button onClick={() => navigate(-1)} rel="noopener noreferrer">
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
  margin: 10px auto;
`;

const Button = styled.a`
  padding: 0.5rem 2rem;
  margin: 4px 0.5rem;
  background-color: #1f2937;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  display:block;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4b5563;
  }

  @media (max-width: 600px) {
    a {
      display: block;
    }
  }
`;
