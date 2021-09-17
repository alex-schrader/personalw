import "./Connect.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";

const Connect = () => {
  return (
    <div>
      <div className='emailover'>
          <p className = 'email'>Feel free to reach out to me via any of the below links <br></br>with any questions or feedback - my inbox is <br></br>always open at aschrad1@swarthmore.edu</p>
      </div>
      <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      <div className='logolinks'>
        <a
          className="menu-item"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/alexschrader1/"
        >
          <FaLinkedin size={50} className="logoimage" />
        </a>
        <a
          className="menu-item"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/aschrad1"
        >
          <FaGithub size={50} className="logoimage" />
        </a>
        <a
          className="menu-item"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/alexkschrader/"
        >
          <FaInstagram size={50} className="logoimage" />
        </a>
        <a
          className="menu-item"
          target="_blank"
          rel="noreferrer"
          href="mailto: aschrad1@swarthmore.edu"
        >
          <GrMailOption size={50} className="logoimage" />
        </a>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Connect;
