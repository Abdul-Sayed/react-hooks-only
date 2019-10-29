import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {

  const [title, setTitle] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label>Song name: </label>
        <input type="text" required value={title} onChange={e => setTitle(e.target.value)} />
        <input type="submit" value="Add Song" />
      </form>
    </React.Fragment>
  );
}

export default NewSongForm;
