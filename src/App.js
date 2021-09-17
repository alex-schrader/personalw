import './App.css';
import Education from './components/Education/Education.js'
import Projects from './components/Projectlist/Projects'
import Timeline from './components/Projectlist/Timeline'
import Connect from './components/Connect'
import AboutMe from './components/AboutMe'

/*      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */
function App() {
  return (
    <div className="App">
      <h1 className = "histyle">Hi, my name is</h1>
      <h1 className = "namestyle">Alex Schrader</h1>
      <h1 className = "compscistyle">Computer Science Major at Swarthmore College</h1>
      <h1 className = 'titlestyle'>1. About Me</h1>
      <AboutMe/>
      <br/><br/><br/><br/><br/><br/><br/>
      <h1 className= 'titlestyle'>2. Projects</h1>
      <Projects/>
      <h1 className= 'titlestyle'>3. Education</h1>
      <Education/>
      <br/><br/><br/><br/><br/><br/>
      <h1 className='titlestyle'>4. Work Experience</h1>
      <Timeline/>
      <h1 className='titlestyle'>5. Connect</h1>
      <Connect/>
    </div>
  );
}

export default App;
