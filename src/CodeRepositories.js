import React, {useState} from 'react';
import chevron_right from './chevron_right.svg';
import chevron_down from './chevron_down.svg';
import './CodeRepositories.css';

function CodeRepositories() {
  let [expanded, setExpanded] = useState(false);
  function toggleExpand() {
    setExpanded(!expanded);
  }
  return (
    <div className="codeRepositories">
      <header className="codeRepositories-header" onClick={toggleExpand}>
        {expanded && <img src={chevron_down} className="chevron" alt=""/>}
        {!expanded && <img src={chevron_right} className="chevron" alt=""/>}
        Code Repositories
      </header>
      {expanded &&
        <div className="codeRepositoriesLinks">
          <a
            href="https://github.cerner.com/phys-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={chevron_right} className="chevron" alt=""/>
            Github
          </a>
          <a
            href="http://scm.physexp.cerner.corp/svn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={chevron_right} className="chevron" alt=""/>
            SubVersion
          </a>
        </div>
      }
    </div>
  );
}

export default CodeRepositories;
