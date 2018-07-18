import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
  >
  <h3>Selected Option is</h3>
  {props.selectedOption && props.selectedOption}
  <button onClick={props.handleSelectedOption}>Okay</button>
  </Modal>
)

export default OptionModal;
