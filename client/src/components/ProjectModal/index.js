import React from 'react';

const ProjectModal = ({ onClose }) => {
  return (
    <>
      <div id='projectModal' className='modal is-active'>
        <div className='modal-background'></div>
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'> Choose a current project </p>
            <button
              onClick={onClose}
              className='delete'
              aria-label='close'
            ></button>
          </header>
          <section className='modal-card-body'>
            <div>
              <div className='section'>
                <input
                  className='input'
                  type='text'
                  placeholder='project url'
                />
                <h3>
                  *Note: OnTrack only works with public GitHub repositories
                </h3>
              </div>
              <div className='section'>
                <label for='target'>Target date: </label>
                <input type='date' id='target' />
              </div>
              <div className='section'>
                <button
                  onClick={onClose}
                  type='button'
                  className='button is-danger center'
                >
                  Confirm Current Project
                </button>
                <h3>Warning: This will replace your current project</h3>
              </div>
            </div>
          </section>
          <footer className='modal-card-foot'>
            <button onClick={onClose} type='button' className='button'>
              Back
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
