import React, {useState} from 'react';
import chevron_right from './chevron_right.svg';
import chevron_down from './chevron_down.svg';

function ProjectDetails(props) {

  return (
    <ul>
      <li>Owner: {props.owner}</li>
      {props.codeRepositories.map(repo => (
        <li><a href={repo.url}>{repo.name}</a></li>
      ))}
      <li><a href={props.jira}>Jira</a></li>
    </ul>
  );
}

export default ProjectDetails;
