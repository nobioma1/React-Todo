import React from 'react';
import { FaCheck } from 'react-icons/fa';

const CompletedButton = ({ action }) => {
  return (
    <button 
      onClick={action}
      className="complete-btn"
    >
      <FaCheck /> Done
    </button>
  );
};
export default CompletedButton;
