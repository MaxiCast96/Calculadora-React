import React from 'react';

const InputField = ({ id, label, placeholder }) => {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type="number"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;