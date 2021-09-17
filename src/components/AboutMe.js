import MyImage from "./swat.jpg";
import "./AboutMe.css";

/*<img className="photo" src={MyImage} />*/

const AboutMe = () => {
  return (
    <div className="wrapper" animateIn="fadeIn">
      <img src={MyImage} alt="myphoto"className="photocss" />
      <p className="aboutmetext">
        Hey! I am a current college sophomore from San Francisco studying
        computer science. I am currently looking to explore further
        oppurtunities in software development, and am open to any internships or
        projects. Outside of work, my hobbies include chess, soccer, and rock
        climbing.
      </p>
    </div>
  );
};

export default AboutMe;
