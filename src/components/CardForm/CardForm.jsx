import React from 'react';
import './CardForm.css'


const enField = document.querySelector("[name=en]")
const esField = document.querySelector("[name=es]")


const CardForm = ({ addWord }) => {
    


 const handleSubmit = (e) => {
    e.preventDefault();


    const enValue = enField.value;
    const esValue = esField.value;

    enField.value = '';
    esField.value = '';

    addWord(enValue, esValue);

 }

  return (
    <section className='card-form'>
        <h2>New Card</h2>
        <form action="" method='GET' onSubmit={handleSubmit}>
            <div className='form-row'>
                <label htmlFor='en-form'>
                    English:
                    <input type="text" name="en" id='en-form' placeholder='English' />
                </label>
            </div>
            <div className='form-row'>
                    <label htmlFor='es-form'>
                    Spanish:
                    <input type="text" name="es" id='es-form' placeholder='Spanish' />
                </label>
            </div>
            <div className='form-row'>
                <button type='submit'>Add card</button>
            </div>
        </form>
    </section>
  )
}

export default CardForm;