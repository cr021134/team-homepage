import React, {useState} from 'react';
import chevron_right from './chevron_right.svg';
import chevron_down from './chevron_down.svg';
import ProjectDetails from './ProjectDetails';

function Project(props) {

  // return (
  //   <a
  //     href={props.url}
  //     target="_blank"
  //     rel="noopener noreferrer"
  //   >
  //     <img src={chevron_right} className="chevron" alt=""/>
  //     {props.name}
  //   </a>
  // );

  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  }
  return (
    <div className="projectsList">
      <header className="projectsList-header" onClick={toggleExpand}>
        {expanded && <img src={chevron_down} className="chevron" alt=""/>}
        {!expanded && <img src={chevron_right} className="chevron" alt=""/>}
        {props.name}
      </header>
      {expanded &&
        <ProjectDetails {...props}/>
        // <div className="projectsList-links">
        //   {props.data.map(project => (
        //     <Project {...project} />
        //   ))}
        // </div>
      }
    </div>
  );
}

export default Project;
