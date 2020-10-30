import React, {useState} from 'react';
import chevron_right from './chevron_right.svg';
import chevron_down from './chevron_down.svg';
import './MenuGroupLink.css';

function MenuGroupLink(props) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  }
  return (
    <div className="menuGroupLink">
      <header className="menuGroupLink-header" onClick={toggleExpand}>
        {expanded && <img src={chevron_down} className="chevron" alt=""/>}
        {!expanded && <img src={chevron_right} className="chevron" alt=""/>}
        {props.header}
      </header>
      {expanded &&
        <div className="menuGroupLink-links">
          {props.links.map(link => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={chevron_right} className="chevron" alt=""/>
              {link.display}
            </a>
          ))}
        </div>
      }
    </div>
  );
}

export default MenuGroupLink;
