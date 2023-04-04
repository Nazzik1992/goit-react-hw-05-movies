import { useState } from 'react';

export const Search = ({setSearchParams }) => {
  const [query, setQuery] = useState('');

  const onChange = (e) => setQuery(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    setSearchParams(query !== '' ? {query} : {})
  }

    return (
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
        <button type="submit">Search</button>
      </form>
    );
  };