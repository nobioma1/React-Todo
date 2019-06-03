import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const DeleteButton = ({ text, action, isActive }) => {
  return (
    <button onClick={action} className="delete-btn" disabled={isActive}>
      <FaRegTrashAlt /> {text}
    </button>
  );
};
export default DeleteButton;
