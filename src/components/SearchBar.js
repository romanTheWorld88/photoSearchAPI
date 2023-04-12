import { useState } from 'react';


function SearchBar({ onSubmit }) {
  // functions & variables

  const[term, setTerm] = useState('');

  const handleFormSubmit = (event) =>{
    event.preventDefault();
    onSubmit('cars');

  };

  const handleChange = (event) => {
    console.log(event.target.value);

  };
  // jsx to return
  // wrapping input inside form, it automatically lets us press enter to submit 
  return (
    <div>
      <form onSubmit={ handleFormSubmit }>
        <input onChange={ handleChange }/>
      </form>
    </div>
  );
}

export default SearchBar;
