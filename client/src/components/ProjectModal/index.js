import React from 'react';
import './projectmodal.css';

const ProjectModal = ({ onClose }) => {
  return (
    <>
      <div id='projectModal' className='modal is-active '>
        <div className='modal-background '></div>
        <div className='modal-card '>
          <header className='modal-card-head secondary'>
            <p className='modal-card-title font'> Choose a current project </p>
            <button
              onClick={onClose}
              className='delete'
              aria-label='close'
            ></button>
          </header>
          <section className='modal-card-body accent'>
            <div>
              <div className='section font'>
                <label className='label font'>Github Repository URL</label>
                <input
                  className='input font primary'
                  type='text'
                  placeholder=''
                />
                <h3>
                  *Note: OnTrack only works with public GitHub repositories
                </h3>
              </div>
              <div className='section font'>
                <label className='label font'>Target Date</label>
                <input type='date' />
              </div>
              <div className='section font'>
                <button
                  onClick={onClose}
                  type='button'
                  className='button is-danger center font'
                >
                  Confirm Current Project
                </button>
                <h3>Warning: This will replace your current project</h3>
              </div>
            </div>
          </section>
          <footer className='modal-card-foot secondary'>
            <button
              onClick={onClose}
              type='button'
              className='button primary font'
            >
              Back
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
