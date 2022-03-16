import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './project.css';

function Project() {
  return (
    <>
      <section className="section container ">
        <h1 className="section-title title">Current Project</h1>
        <div className="box center section">
          <h2>No project selected</h2>
        </div>
        <div className="section center">
          <h3>Select a new project</h3>
        </div>
        <div className="center">
          <button className="button is-info is-rounded">
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </button>
        </div>
      </section>
    </>
  );
}

export default Project;
