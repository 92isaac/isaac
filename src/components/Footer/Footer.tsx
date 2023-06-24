import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="hidden md:flex md:justify-center md:items-center">
      <div className="flex items-center justify-between md:gap-4 lg:gap-10">
        <ul className="flex items-center justify-between gap-2 mt-3 text-xs lg:text-lg">
          <li>
            <Link to="/">
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
            <Link to="/">
              <FiGithub className="" />
            </Link>
          </li>
        </ul>
        <p className="text-xs lg:text-lg inline">
          <Link to="tel:+2348068290320">Telephone: +2348068290320</Link>
        </p>
        <p className="text-xs lg:text-lg inline">
          <Link to="mailto:sangodareisaac92@gmail.com">
            sangodareisaac@gmail.com
          </Link>
        </p>
        <p className="text-xs lg:text-lg inline">&copy; {year}</p>
      </div>
    </div>
  );
};
