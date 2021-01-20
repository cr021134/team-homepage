import React, {useState} from 'react';
import chevron_right from './chevron_right.svg';
import chevron_down from './chevron_down.svg';
import './ProjectsList.css';
import Project from './Project.js'

function ProjectsList(props) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  }
  return (
    <div className="projectsList">
      <header className="projectsList-header" onClick={toggleExpand}>
        {expanded && <img src={chevron_down} className="chevron" alt=""/>}
        {!expanded && <img src={chevron_right} className="chevron" alt=""/>}
        Projects
      </header>
      {expanded &&
        <div className="projectsList-links">
          {props.data.map(project => (
            <Project {...project} />
          ))}
        </div>
      }
    </div>
  );
}

export default ProjectsList;
