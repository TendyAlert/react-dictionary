import { useState } from 'react';

import CardForm from './components/CardForm/CardForm';
import CardsContainer from './components/CardsContainer/CardsContainer';

import './App.css';

function App() {
  const [words, setWords] = useState([
    {front: "translation", back: "traducción"},
    {front: "egg", back: "huevo"},
    {front: "Taxi", back: "Taxi"},
    {front: "plaza", back: "plaza"},
    {front: "paper", back: "papel"},
    {front: "seven", back: "siete"}
    ]);

    const addWord = (front, back) => {
      const newWords = [...words, {front, back}];
      setWords(newWords)
    } 

    const deleteWord = (front) => {
      const newWords = words.filter(word => word.front !== front);
      setWords(newWords);
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary App</h1>
      </header>
      <main>
        <CardForm addWord={addWord}/>
        <CardsContainer words = {words} deleteWord={deleteWord}/>
      </main>
    </div>
  );
}

export default App;
