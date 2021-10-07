import { BsFolder } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";

import "./SingleProject.css";

const SingleProject = (props) => {
  return (
    <div className="outercard">
        <a href = {props.link} target="_blank" rel="noreferrer" className = 'hreflink'>
      <div className="card">
        <BsFolder className="imgfold" />
        <BsLink45Deg className = 'link'/>
        <h1 className="title">{props.title}</h1>
        <h1 className="text1">{props.text}</h1>
        <h1 className="tech">{props.tech}</h1>


      </div>
      </a>
    </div>
  );
};

export default SingleProject;
