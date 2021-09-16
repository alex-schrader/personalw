import SingleProject from "./SingleProject";
import './Projects.css'


const Projects = () => {
  return (
    <div className = 'one'>
      <SingleProject
        title="Voice Controlled Chess"
        text="OWL Hackathon Winner, Coded backend chess logic in C++, used minimax algorithm for computer."
        tech="C++, QT"
        link="https://devpost.com/software/disabilitychess"
      />
      <SingleProject
        title="Expense Tracker"
        text="Interactive website that allows users to upload expenses and visualize data with a graph and a dropdown
        menu."
        tech="React, JS, HTML, CSS"
        link='https://aschrad1.github.io/ExpenseTracker/'

      />
      <SingleProject
        title="Hospital Data Sorting"
        text="Python algorithm manipulated data to provide the user with options on relevant medical data."
        tech="Python"
        link="https://github.com/aschrad1/HospitalSorting"

        
      />
    </div>
  );
};

export default Projects;
