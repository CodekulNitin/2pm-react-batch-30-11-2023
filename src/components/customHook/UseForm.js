import { useState } from 'react';

const UseForm = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return { formData, handleChange, resetForm };
};

export default UseForm;