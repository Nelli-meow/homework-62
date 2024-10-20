import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from '../AppComponents/Button/Button.tsx';

const App3 = () => {
  const url = 'https://api.chucknorris.io/jokes/random';
  const [jokes, setJokes] = useState([]);
  const [iconUrl, setIconUrl] = useState('');

  const fetchData = async  () => {
    const response = await fetch(url);

    if(response.ok) {
      const result = await response.json();

      setJokes(result.value);
      setIconUrl(result.icon_url);
    } else {
      console.error('Could not fetch jokes.');
    }
  }

  useEffect( () => {
    void fetchData();
  }, [])

  return (
    <div className="container mt-5 text-center">
      <div className="row">
        <div className="card">
          <div className="card-body text-center">
            <img src={iconUrl} alt="Chuck Norris" className="mb-3"/>
            <p>{jokes}</p>
          </div>
        </div>
      </div>
      <Button onClick={ fetchData }/>
    </div>
  );
};

export default App3;