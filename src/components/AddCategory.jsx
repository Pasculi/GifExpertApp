import React, { useState } from 'react'

const AddCategory = ({setCategoria}) => {

    const [inputValue, setInputValue] = useState();
    const inputCategory = document.querySelector('#input-category')


    const handleInput = ({target})=>{
       const inputError = target.id

      setInputValue (target.value)
        const errorInput = document.querySelector(`.error`)

        if(inputValue.length <= 2 || inputValue.length === 0){
            errorInput.classList.add(`error-${inputError}`);
            errorInput.textContent = "Este campo es requerido"
        }else{
            errorInput.classList.remove(`error-${inputError}`);
        }
       

  
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();        
            setCategoria( cat => [inputValue, ...cat]);
            inputCategory.value = " ";
        }
  
    

  return (
    <>
        <h2>Add a new category</h2>
      <form onSubmit={handleSubmit}>
      <div className='group-input'>
        <input id="input-category" type="text" placeholder="Category name" onChange={handleInput} />{" "}
        <span className="error " >Elemento requerido</span>
      </div>
        <button className='btn' type="submit">Add category</button>
      </form>
    </>

  )
}

export default AddCategory