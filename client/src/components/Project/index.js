import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './project.css';
import Modal from '../ProjectModal';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../../utils/queries';

function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];

  if (!projects.length) {
    return (
      <section className='section'>
        <h1 className='has-text-centered has-text-weight-semibold is-size-3 project-title'>
          Current Project
        </h1>
        <div className='section center'>
          <h2 className='font has-text-weight-semibold is-size-4'>
            {' '}
            No project selected{' '}
          </h2>
        </div>
        <div className='section center'>
          <h3 className='font'>Select a new project</h3>
        </div>
        <div className='center'>
          <button
            className='button is-info is-rounded'
            onClick={() => toggleModal()}
          >
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </button>
        </div>
        <div>{isModalOpen && <Modal onClose={toggleModal} />}</div>
      </section>
    );
  }

  return (
    <>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <section className='section'>
            <h1 className='has-text-centered has-text-weight-semibold is-size-3 project-title'>
              Current Project
            </h1>
            <div className='center section'>
              {/* hardcoding index 0 once we are only handling 1 project at a time on our MVP */}
              <h2 className='font'>{projects[0].projectTitle}</h2>
              {/* temporary field to display data of issueCount for testing */}
              <p>Issue count is: {projects[0].issueCount}</p>
            </div>
            <div className='section center'>
              <h3 className='font'>Select a new project</h3>
            </div>
            <div className='center'>
              <button
                className='button is-info is-rounded'
                onClick={() => toggleModal()}
              >
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </button>
            </div>
            <div>{isModalOpen && <Modal onClose={toggleModal} />}</div>
          </section>
        )}
      </div>
    </>
  );
}

export default Project;
