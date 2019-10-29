import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {


  // useState returns a state object, 'songs', containing the data passed to it, and a function, 'setSongs', to edit that state
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 }
  ])

  const addSong = (title) => {
    setSongs([...songs, { title: title, id: uuid() }])
  }

  // similar to componentDidMount() for functional components. To make updates less expensive, pass a callback function to specify the part state useEffect should watch for rerenders
  useEffect(() => {
    console.log('useEffect hook ran', songs)
  }, [songs])


  const [age, setAge] = useState(18)

  useEffect(() => {
    console.log('useEffect hook ran', age)
  }, [age])

  return (
    <React.Fragment>
      <div className="song-list">
        <ul>
          {songs.map(song => <li key={song.id}>{song.title}</li>)}
        </ul>
        <NewSongForm addSong={addSong} />
      </div>
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </React.Fragment>
  );
}

export default SongList;
