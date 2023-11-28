import './App.css';
import { useState } from 'react';
import Nav from './Components/Nav';
import Landing from './Components/Landing';
import Footer from './Components/Footer';
import EmailForm from './Components/EmailForm';

function App() {
  // STATE MANAGEMENT
  const [projects, setProjects] = useState([]);
  const [projectDisplay, setProjectDisplay] = useState(false);
  const [selectProject, setSelectProject] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState(['--blue-to-purple-h', '--blue-to-purple-v']);
  const [isContainerVisible, setIsContainerVisible] = useState(false);
  const [displayEmailForm, setDisplayEmailForm] = useState(false);
  
  return (
    <div className="master-container">
      <div className="App">
        <div
          className='bottom-right-horizontal-border'
          style={{ background: `var(${backgroundColor[0]})`}}
        ></div>
        <div
          className='bottom-right-vertical-border'
          style={{ background: `var(${backgroundColor[1]})`}}
        ></div>
        <Nav
          projectDisplay={projectDisplay}
          setProjectDisplay={setProjectDisplay}
          displayEmailForm={displayEmailForm}
          setDisplayEmailForm={setDisplayEmailForm}
        />
        {displayEmailForm ? <EmailForm /> : ''}
        <Landing
          projects={projects}
          setProjects={setProjects}
          projectDisplay={projectDisplay}
          setProjectDisplay={setProjectDisplay}
          selectProject={selectProject}
          setSelectProject={setSelectProject}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
          isContainerVisible={isContainerVisible}
          setIsContainerVisible={setIsContainerVisible}
        />
        <Footer backgroundColor={backgroundColor} />
      </div>
    </div>
    
  );
}

export default App;
