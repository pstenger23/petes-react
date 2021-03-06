import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if(!isValid) {
                setErrorMessage('Your email is invalid');
            }
            else {
                setErrorMessage('');
            }
        }
        else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`)
            }
            else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }
    return(
        <section className="contact">
            
            <form className="contact-form" onSubmit={handleSubmit}>
            <h2 class='contact-title'>Please reach out!</h2>
                <div className="inputs">
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange}/>
                </div>
                <div className="inputs">
                    <label htmlFor='email'>Email:</label>
                    <input type='text' name='email' defaultValue={email} onBlur={handleChange}/>
                </div>
                <div className="inputs">
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange}></textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p className='error'>{errorMessage}</p>
                    </div>
                )}
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default Contact;