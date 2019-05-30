import React from 'react';
import { FaTrash } from 'react-icons/fa';

const DeleteButton = ({ text, action }) => {
  return (
    <button className="delete-btn">
      <FaTrash /> {text}
    </button>
  );
};
export default DeleteButton;
