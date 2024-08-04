import React, { useState } from 'react'

const AddCategory = ({categories,setCategoria}) => {

    const [inputValue, setInputValue] = useState();
    const inputCategory = document.querySelector('#input-category')

    const handleInput = (evt)=>{
        const input = evt.target.value;
        setInputValue(input);

  
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setCategoria([ inputValue,...categories]);
        inputCategory.value = " ";
  
    }

  return (
    <>
        <h2>Add a new category</h2>
      <form onSubmit={handleSubmit}>
        <input id="input-category" type="text" placeholder="Category name" onChange={handleInput} />{" "}
        <button type="submit">Add category</button>
      </form>
    </>

  )
}

export default AddCategory