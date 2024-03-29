import React from 'react';
import WordCard from '../word-card/word-card';
import './CardsContainer.css'

export default function CardsContainer({ words, deleteWord }) {

  const cardList = words.map( ({front, back}) => 
    <WordCard front={front} back={back} deleteWord={deleteWord} key={`${front}`}/>
  );

  return (
    <section className='cards-container'>
          {cardList}
    </section>
  )
}
