import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './project.css';
import Modal from '../ProjectModal';

function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <section className='section  '>
        <h1 className='has-text-centered has-text-weight-semibold is-size-3 project-title'>
          Current Project
        </h1>
        <div className='center section'>
          {/* future task, change this to display current project for user if project is selected */}
          <h2 className='font'>No project selected</h2>
        </div>
        <div className='section center'>
          <h3 className='font'>Select a new project</h3>
        </div>
        <div className='center '>
          <button
            className='button is-info is-rounded'
            onClick={() => toggleModal()}
          >
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </button>
        </div>
        <div>{isModalOpen && <Modal onClose={toggleModal} />}</div>
      </section>
    </>
  );
}

export default Project;
