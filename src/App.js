import { useEffect, useState } from 'react';
import img from './hammid.png'

const API_URL = 'https://www.blagues-api.fr/api/random?disallow=dark&disallow=limit'
const API_TOKEN = {
  headers: {
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjcxOTk4OTY5ODYzNzMzMjQ4IiwibGltaXQiOjEwMCwia2V5IjoidjVvTkJvTmgxSnFVd1ZUeU9Mb0VLaFhPM3NZS3g2WktRTWxDQlhlekdvRTRzd1p1ZlAiLCJjcmVhdGVkX2F0IjoiMjAyMS0wNS0wOVQwOTozNjo1OSswMDowMCIsImlhdCI6MTYyMDU1MzAxOX0.uk0XGCW4z5pR6ltFZUPiIdhu22GpAVw6gu3_fQasJ-Q`  
  }
}


function App() {

  const [joke, setJoke] = useState('');
  const [answer, setAnswer] = useState('');

  const generateJoke = () => {
    fetch(API_URL, API_TOKEN )
  .then(res => res.json())
  .then(data => {
    setJoke(data.joke);
    setAnswer(data.answer)
  }) 
}  

  useEffect(()=> {
    generateJoke();
  }, []);

  return (
    <div className = "container">
      <div className = "box">
      <h1>Hamid Joke Generator</h1>
      <p>{joke}</p>
      <p>{answer}</p>
      <button onClick ={generateJoke}> Une autre ! 😀</button>
      </div>
      <img src={img} alt="mon image" />
    </div>
    
  );

}

export default App
