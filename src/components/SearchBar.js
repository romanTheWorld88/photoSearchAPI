import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSubmit }) {
  // functions & variables

  const[term, setTerm] = useState('');

  const handleFormSubmit = (event) =>{
    event.preventDefault();
    onSubmit(term);

  };

  const handleChange = (event) => {
    setTerm(event.target.value);

  };
  // jsx to return
  // wrapping input inside form, it automatically lets us press enter to submit 
  return (
    <div  className='search-bar'>
      <form onSubmit={ handleFormSubmit }>
        <label>Enter Search Term</label>
        <input value={term} onChange={ handleChange }/>
        <h3>Results for {term}</h3>
      </form>
    </div>
  );
}

export default SearchBar;
