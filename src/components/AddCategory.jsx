import React, { useState } from 'react'

const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }
  
  const onSubmit = (evt) => {
    evt.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue('')
  }



  return (
    <>
      <h2>Add a new category</h2>
      <form onSubmit={onSubmit}>
        <div className='group-input'>
          <input id="input-category" type="text" value={inputValue } placeholder="Category name" onChange={onInputChange} />{" "}
          <span className="error " >Elemento requerido</span>
        </div>
        <button className='btn' type="submit">Add category</button>
      </form>
    </>

  )
}

export default AddCategory